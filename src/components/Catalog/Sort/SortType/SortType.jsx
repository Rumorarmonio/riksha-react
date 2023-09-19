import React from 'react'
import styles from './SortType.module.scss'
import {sortTypes} from '../../../../assets/data/arrays'
import {SearchContext} from '../../Catalog'

function SortType() {
    const [open, setOpen] = React.useState(false)
    const { sortType, onChangeSort } = React.useContext(SearchContext)

    const onClickListItem = (i) => {
        onChangeSort(i)
        setOpen(false)
    }

    return (
        <div className={styles.sortType}>
            <span className={styles.supTitle}>Сортировка</span>
            <div className={styles.button}
                 onClick={() => setOpen(!open)}>
                <span>{sortType.name}</span>
                <i className={`${styles.arrow} ${open ? styles.up : styles.down}`}></i>
            </div>
            {
                open && (
                    <div className={styles.popup}>
                        <ul>
                            {
                                sortTypes.map((type, index) => (
                                    <li className={sortType.sortProperty === index ? 'active' : ''}
                                        onClick={() => onClickListItem(type)}
                                        key={index}>
                                        {type.name}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                )
            }
        </div>
    )
}

export default SortType
