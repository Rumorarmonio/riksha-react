import React from 'react'
import styles from './Search.module.scss'
import search from '../../../../assets/images/svg/search/search.svg'
import close from '../../../../assets/images/svg/search/close.svg'
import {FilterContext} from '../../Catalog'

export function Search() {
    const {searchValue, setSearchValue} = React.useContext(FilterContext)
    const inputRef = React.useRef()

    const onClickClear = () => {
        setSearchValue('')
        inputRef.current.focus()
    }

    return (
        <div className={styles.search}>
            <img className={styles.icon} src={search} alt="search.svg"/>
            <input
                ref={inputRef}
                value={searchValue}
                onChange={event => setSearchValue(event.target.value)}
                className={styles.input}
                placeholder="Поиск..."
            />
            {
                searchValue && (
                    <img className={styles.clearIcon} onClick={onClickClear} src={close} alt="close.svg"/>
                )
            }
        </div>
    )
}
