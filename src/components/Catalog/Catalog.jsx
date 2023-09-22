import React from 'react'
import axios from 'axios'
import {useDispatch, useSelector} from 'react-redux'

import InfoBlock from './InfoBlock/InfoBlock'
import Sort from './Sort/Sort'
import FoodList from './FoodList/FoodList'
import {setCategoryId, setCurrentPage} from '../../redux/slices/filterSlice'

export const FilterContext = React.createContext()

export default function Catalog() {
    const {categoryId, sortType, currentPage} = useSelector(state => state.filter)
    const dispatch = useDispatch()

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

    React.useEffect(() => {
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
        // window.scrollTo(0, 0)
    }, [categoryId, sortType, searchValue, currentPage])

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
