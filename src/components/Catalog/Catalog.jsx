import InfoBlock from './InfoBlock/InfoBlock'
import Sort from './Sort/Sort'
import FoodList from './FoodList/FoodList'
import React from 'react'

export default function Catalog() {
    const [items, setItems] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)

    const [categoryId, setCategoryId] = React.useState(0)
    const [sortType, setSortType] = React.useState({
        name: 'По умолчанию',
        sortProperty: ''
    })
    // TODO: count pages in code and remove hardcoded number
    const [currentPage, setCurrentPage] = React.useState(1)
    const [searchValue, setSearchValue] = React.useState('')

    React.useEffect(() => {
        setIsLoading(true)

        const sortBy = sortType.sortProperty.replace('-', '')
        const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc'
        // const category = categoryId > 0 ? `category=${categoryId}` : ''
        // TODO: search by name
        const search = searchValue ? `&search=${searchValue}` : ''

        fetch(`https://64db1b63593f57e435b07477.mockapi.io/items?page=${currentPage}&limit=9&sortBy=${sortBy}&order=${order}${search}`)
        .then(res => res.json())
        .then(arr => {
            setItems(arr)
            setIsLoading(false)
        })
        // window.scrollTo(0, 0)
    }, [categoryId, sortType, searchValue, currentPage])

    return (
        <>
            <Sort categoryId={categoryId}
                  onChangeCategory={(index) => setCategoryId(index)}
                  sortType={sortType}
                  onChangeSort={(index) => setSortType(index)}
                  searchValue={searchValue}
                  setSearchValue={setSearchValue}
            />
            <FoodList
                items={items} isLoading={isLoading}
                onChangePage={number => setCurrentPage(number)}
            />
            <InfoBlock/>
        </>
    )
}
