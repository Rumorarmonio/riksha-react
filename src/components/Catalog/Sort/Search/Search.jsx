import React from 'react'
import styles from './Search.module.scss'
import search from '../../../../assets/images/svg/search/search.svg'
import close from '../../../../assets/images/svg/search/close.svg'
import {SearchContext} from '../../Catalog'

export function Search() {
    const { searchValue, setSearchValue } = React.useContext(SearchContext)

    return (
        <div className={styles.search}>
            <img className={styles.icon} src={search} alt="search.svg"/>
            <input
                value={searchValue}
                onChange={event => setSearchValue(event.target.value)}
                className={styles.input}
                placeholder="Поиск..."
            />
            {
                searchValue && (
                    <img className={styles.clearIcon} onClick={() => setSearchValue('')} src={close} alt="close.svg"/>
                )
            }
        </div>
    )
}
