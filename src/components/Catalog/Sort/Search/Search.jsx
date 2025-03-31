import React from 'react';

import styles from './Search.module.scss';
import search from '../../../../assets/images/svg/search/search.svg';
import close from '../../../../assets/images/svg/search/close.svg';
import debounce from 'lodash.debounce';
import {useDispatch} from 'react-redux';
import {setSearchValue} from '../../../../redux/slices/filterSlice';

export function Search() {
  const [value, setValue] = React.useState('');
  const inputRef = React.useRef();
  const dispatch = useDispatch();

  function onClickClear() {
    dispatch(setSearchValue(''));
    setValue('');
    inputRef.current.focus();
  }

  function onChangeInput(event) {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  }

  const updateSearchValue = React.useCallback(
    debounce(string => {
      dispatch(setSearchValue(string));
    }, 1000),
    [],
  );

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
  );
}
