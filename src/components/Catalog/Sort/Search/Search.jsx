import React from 'react'

import styles from './Search.module.scss'
import search from '../../../../assets/images/svg/search/search.svg'
import close from '../../../../assets/images/svg/search/close.svg'
import {FilterContext} from '../../Catalog'
import debounce from 'lodash.debounce'

export function Search() {
  const [value, setValue] = React.useState('')
  const { setSearchValue } = React.useContext(FilterContext)
  const inputRef = React.useRef()

  const onClickClear = () => {
    setSearchValue('')
    setValue('')
    inputRef.current.focus()
  }

  const updateSearchValue = React.useCallback(
    debounce(string => {
      setSearchValue(string)
    }, 1000),
    [],
  )

  const onChangeInput = event => {
    setValue(event.target.value)
    updateSearchValue(event.target.value)
  }

  return (
    <div className={styles.search}>
      <img className={styles.icon} src={search} alt="search.svg"/>
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className={styles.input}
        placeholder="Поиск..."
      />
      {
        value && (
          <img className={styles.clearIcon} onClick={onClickClear} src={close} alt="close.svg"/>
        )
      }
    </div>
  )
}
