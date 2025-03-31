import React from 'react';
import styles from './SortType.module.scss';
import {sortTypes} from '../../../../assets/data/arrays';
import {useDispatch, useSelector} from 'react-redux';
import {selectSortType, setSort} from '../../../../redux/slices/filterSlice';

export function SortType() {
  const dispatch = useDispatch();
  const sortType = useSelector(selectSortType);

  const [open, setOpen] = React.useState(false);
  const sortRef = React.useRef();

  function onClickListItem(type) {
    dispatch(setSort(type));
    setOpen(false);
  }

  // TODO: fix clicking outside
  // React.useEffect(() => {
  //     const handleClickOutside = (event) => {
  //         if (!event.path.includes(sortRef.current)) {
  //             setOpen(false)
  //         }
  //     }
  //
  //     document.body.addEventListener('click', handleClickOutside)
  //     console.log('addEventListener')
  //
  //     return () => {
  //         document.body.removeEventListener('click', handleClickOutside)
  //         console.log('removeEventListener')
  //     }
  // }, [])

  return (
    <div ref={sortRef} className={styles.sortType}>
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
                  <li
                    className={sortType.sortProperty === index ? 'active' : ''}
                    onClick={() => onClickListItem(type)}
                    key={index}
                  >
                    {type.name}
                  </li>
                ))
              }
            </ul>
          </div>
        )
      }
    </div>
  );
}
