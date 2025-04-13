import React, { JSX, useRef } from 'react'
import styles from './SortType.module.scss'
import { sortTypes } from '../../../../assets/data/data'
import { useSelector } from 'react-redux'
import { selectSortType, setSort } from '../../../../redux/slices/filterSlice'
import { Sort } from '../../../../types/Sort'
import clsx from 'clsx'
import { useAppDispatch } from '../../../../redux/store'

export function SortingType(): JSX.Element {
  const dispatch = useAppDispatch()
  const sortType: any = useSelector(selectSortType)

  const [open, setOpen] = React.useState(false)
  const sortRef = useRef<HTMLDivElement>(null)

  function onClickListItem(type: any): void {
    dispatch(setSort(type))
    setOpen(false)
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
    <div
      ref={sortRef}
      className={styles.sortType}
    >
      <span className={styles.supTitle}>Сортировка</span>
      <div className={styles.button}
           onClick={(): void => setOpen(!open)}>
        <span>
          {sortType.name}
        </span>
        <i className={`${styles.arrow} ${open ? styles.up : styles.down}`}></i>
      </div>
      {
        open && (
          <div className={styles.popup}>
            <ul>
              {
                sortTypes.map((type: Sort, index: number): JSX.Element => (
                  <li
                    className={clsx(sortType.sortProperty === index && 'active')}
                    onClick={(): void => onClickListItem(type)}
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
  )
}
