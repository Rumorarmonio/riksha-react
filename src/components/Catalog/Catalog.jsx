import React from 'react'
import qs from 'qs'
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'

import InfoBlock from './InfoBlock/InfoBlock'
import Sort from './Sort/Sort'
import FoodList from './FoodList/FoodList'
import {setCategoryId, setCurrentPage, setFilters} from '../../redux/slices/filterSlice'
import {sortTypes} from '../../assets/data/arrays'
import {fetchProducts} from '../../redux/slices/productsSlice'

export const FilterContext = React.createContext()

export default function Catalog() {
  console.log('catalog rendered')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const isSearch = React.useRef(false)
  const isMounted = React.useRef(false)

  const { categoryId, sortType, currentPage } = useSelector(state => state.filter)
  const { products, status } = useSelector(state => state.products)

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id))
  }

  const onChangePage = number => {
    dispatch(setCurrentPage(number))
  }

  // TODO: count pages in code and remove hardcoded number
  const [searchValue, setSearchValue] = React.useState('')

  async function getProducts() {
    const sortBy = sortType.sortProperty.replace('-', '')
    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc'
    // const category = categoryId > 0 ? `category=${categoryId}` : ''
    // TODO: search by name
    const search = searchValue ? `&search=${searchValue}` : ''

    dispatch(
      fetchProducts({
        sortBy,
        order,
        search,
        currentPage,
      }),
    )
  }

  // TODO: fix multiple renderings
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

    // window.scrollTo(0, 0)

    if (!isSearch.current) {
      getProducts()
    }

    // isSearch.current = false
  }, [categoryId, sortType.sortProperty, searchValue, currentPage])

  // TODO: fix getting params from query string
  React.useEffect(() => {
    // console.log(qs.parse(window.location.search.substring(1)))
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1))

      const sortType = sortTypes.find(obj =>
        obj.sortProperty === params.sortProperty,
      )

      dispatch(
        setFilters({
          ...params,
          sortType,
        }),
      )
      isSearch.current = true
    }
  }, [])

  return (
    <>
      <FilterContext.Provider
        value={{
          categoryId,
          onChangeCategory,
          setSearchValue,
        }}
      >
        <Sort/>
        <FoodList
          items={products}
          status={status}
          currentPage={currentPage}
          onChangePage={onChangePage}
        />
      </FilterContext.Provider>
      <InfoBlock/>
    </>
  )
}
