import React from 'react'
import axios from 'axios'
import qs from 'qs'
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'

import InfoBlock from './InfoBlock/InfoBlock'
import Sort from './Sort/Sort'
import FoodList from './FoodList/FoodList'
import {setCategoryId, setCurrentPage, setFilters} from '../../redux/slices/filterSlice'
import {sortTypes} from '../../assets/data/arrays'

export const FilterContext = React.createContext()

export default function Catalog() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const isSearch = React.useRef(false)
    const isMounted = React.useRef(false)

    const {categoryId, sortType, currentPage} = useSelector(state => state.filter)

    const onChangeCategory = (id) => {
        dispatch(setCategoryId(id))
        console.log('onChangeCategory', categoryId)
    }

    const onChangePage = number => {
        dispatch(setCurrentPage(number))
    }

    const [items, setItems] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)

    // TODO: count pages in code and remove hardcoded number
    const [searchValue, setSearchValue] = React.useState('')

    const fetchItems = () => {
        setIsLoading(true)

        const sortBy = sortType.sortProperty.replace('-', '')
        const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc'
        // const category = categoryId > 0 ? `category=${categoryId}` : ''
        // TODO: search by name
        const search = searchValue ? `&search=${searchValue}` : ''

        axios.get(`https://64db1b63593f57e435b07477.mockapi.io/items?page=${currentPage}&limit=9&sortBy=${sortBy}&order=${order}${search}`)
        .then(response => {
                setItems(response.data)
                setIsLoading(false)
            }
        )
    }

    React.useEffect(() => {
        if (window.location.search) {
            const params = qs.parse(window.location.search.substring(1))

            const sortType = sortTypes.find(obj => obj.sortProperty === params.sortProperty)

            dispatch(
                setFilters({
                    ...params,
                    sortType
                })
            )
            isSearch.current = true
        }
    }, [])

    React.useEffect(() => {
        if (isMounted.current) {
            const queryString = qs.stringify({
                sortProperty: sortType.sortProperty,
                categoryId,
                currentPage,
            })
            navigate(`?${queryString}`)
        }
        isMounted.current = true
    }, [categoryId, sortType.sortProperty, searchValue, currentPage])

    React.useEffect(() => {
        // window.scrollTo(0, 0)

        if (!isSearch.current) {
            fetchItems()
        }

        isSearch.current = false
    }, [categoryId, sortType.sortProperty, searchValue, currentPage])

    return (
        <>
            <FilterContext.Provider
                value={{
                    categoryId,
                    onChangeCategory,
                    setSearchValue
                }}
            >
                <Sort/>
                <FoodList
                    items={items}
                    isLoading={isLoading}
                    currentPage={currentPage}
                    onChangePage={onChangePage}
                />
            </FilterContext.Provider>
            <InfoBlock/>
        </>
    )
}
