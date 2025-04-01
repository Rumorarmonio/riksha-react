import React, {ReactElement, useRef, useState} from 'react'

import styles from './Search.module.scss'
import search from '../../../../assets/images/svg/search/search.svg'
import close from '../../../../assets/images/svg/search/close.svg'
import debounce from 'lodash.debounce'
import {useDispatch} from 'react-redux'
import {setSearchValue} from '../../../../redux/slices/filterSlice'

export function Search(): ReactElement {
  const [value, setValue] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const dispatch = useDispatch()

  function onClickClear() {
    dispatch(setSearchValue(''))
    setValue('')
    inputRef.current!.focus()
  }

  function onChangeInput(event: any): any {
    setValue((event.target as HTMLInputElement).value)
    updateSearchValue((event.target as HTMLInputElement).value)
  }

  const updateSearchValue = React.useCallback(
    debounce((string: string): void => {
      dispatch(setSearchValue(string))
    }, 1000),
    [],
  )

  return (
    <div className={styles.search}>
      <img
        className={styles.icon}
        src={search}
        alt="search.svg"
      />
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className={styles.input}
        placeholder="Поиск..."
      />
      {
        value && (
          <img
            className={styles.clearIcon}
            onClick={onClickClear}
            src={close}
            alt="close.svg"
          />
        )
      }
    </div>
  )
}
