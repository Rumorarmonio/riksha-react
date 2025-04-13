import React, { JSX, useCallback, useEffect, useRef } from 'react'
import qs, { ParsedQs } from 'qs'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { InfoBlock } from './InfoBlock/InfoBlock'
import { Sorting } from './Sort/Sorting'
import { FoodList } from './FoodList/FoodList'
import { FilterSliceState, selectFilter, selectSearchValue, setCategoryId, setCurrentPage, setFilters } from '../../redux/slices/filterSlice'
import { sortTypes } from '../../assets/data/data'
import { fetchProducts, selectProducts } from '../../redux/slices/productsSlice'
import { Sort, SortPropertyEnum } from '../../types/Sort'
import { useAppDispatch } from '../../redux/store'

export function Catalog(): JSX.Element {
  console.log('catalog rendered')
  const dispatch = useAppDispatch()
  const navigate: NavigateFunction = useNavigate()

  const isSearch = useRef<boolean>(false)
  const isMounted = useRef<boolean>(false)

  const { categoryId, sortType, currentPage } = useSelector(selectFilter)
  const { products, status } = useSelector(selectProducts)

  function onChangeCategory(id: number): void {
    dispatch(setCategoryId(id))
  }

  // TODO: count pages in code and remove hardcoded number
  const onChangePage = useCallback((number: number): void => {
    dispatch(setCurrentPage(number))
  }, [])

  const searchValue: string = useSelector(selectSearchValue)

  async function getProducts(): Promise<void> {
    const sortBy: SortPropertyEnum = sortType.sortBy.replace('-', '') as SortPropertyEnum
    const order: 'asc' | 'desc' = sortType.sortBy.includes('-') ? 'asc' : 'desc'
    // const category = categoryId > 0 ? `category=${categoryId}` : ''
    // TODO: search by name
    const search: string = searchValue ? `&search=${searchValue}` : ''

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
  useEffect((): void => {
    if (isMounted.current) {
      const queryString: string = qs.stringify({
        sortBy: sortType.sortBy,
        categoryId,
        currentPage,
      })

      navigate(`?${queryString}`)
    }

    isMounted.current = true

    // TODO: зачем здесь проверка?
    // if (!isSearch.current) {
    getProducts()
    // }

    // isSearch.current = false
  }, [
    categoryId,
    sortType.sortBy,
    searchValue,
    currentPage,
  ])

  // TODO: fix getting params from query string
  useEffect((): void => {
    if (window.location.search) {
      // TODO: использовать useLocation() (возможно)
      const params: ParsedQs = qs.parse(window.location.search.substring(1))

      const sortType: Sort = sortTypes.find((type: Sort): boolean =>
        type.sortBy === params.sortBy,
      ) as Sort

      dispatch(
        setFilters({
          searchValue: params.search,
          categoryId: Number(params.category),
          currentPage: Number(params.currentPage),
          sortType: sortType || sortTypes[0],
        } as FilterSliceState),
      )

      isSearch.current = true
    }
  }, [])

  return (
    <>
      <Sorting />
      <FoodList
        items={products}
        status={status}
        currentPage={currentPage}
        onChangePage={onChangePage}
      />
      <InfoBlock />
    </>
  )
}
