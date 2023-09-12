import styles from './Sort.module.scss'
import Tags from './Tags/Tags'
import SortType from './SortType/SortType'

export default function Sort({categoryId, onChangeCategory, sortType, onChangeSort}) {
    return (
        <div className={styles.sort}>
            <div className={styles.wrapper}>
                {/*TODO: sort by tags and categories*/}
                <Tags value={categoryId} onChange={onChangeCategory}/>
                <SortType value={sortType} onChange={onChangeSort}/>
            </div>
        </div>
    )
}
