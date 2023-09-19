import styles from './Sort.module.scss'
import Tags from './Tags/Tags'
import SortType from './SortType/SortType'
import {Search} from './Search/Search'

export default function Sort(
    {
        categoryId, onChangeCategory,
        sortType, onChangeSort,
        searchValue, setSearchValue
    }
) {
    return (
        <div className={styles.sort}>
            <div className={styles.wrapper}>
                {/*TODO: sort by tags and categories*/}
                <Tags value={categoryId} onChange={onChangeCategory}/>
                <SortType value={sortType} onChange={onChangeSort}/>
                <Search value={searchValue} onChange={setSearchValue}/>
            </div>
        </div>
    )
}
