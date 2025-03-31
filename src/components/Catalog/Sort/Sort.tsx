import styles from './Sort.module.scss'
import {Tags} from './Tags/Tags'
import {SortType} from './SortType/SortType'
import {Search} from './Search/Search'
import {ReactElement} from 'react'

export function Sort(): ReactElement {
  return (
    <div className={styles.sort}>
      <div className={styles.wrapper}>
        {/*TODO: sort by tags and categories*/}
        <Tags/>
        <SortType/>
        <Search/>
      </div>
    </div>
  )
}
