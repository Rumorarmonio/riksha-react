import styles from './Sort.module.scss'
import { Tags } from './Tags/Tags'
import { SortingType } from './SortType/SortingType'
import { Search } from './Search/Search'
import { JSX } from 'react'

export function Sorting(): JSX.Element {
  return (
    <div className={styles.sort}>
      <div className={styles.wrapper}>
        {/*TODO: sort by tags and categories*/}
        <Tags />
        <SortingType />
        <Search />
      </div>
    </div>
  )
}
