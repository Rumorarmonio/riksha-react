import styles from './Sort.module.scss'
import { Tags } from './Tags/Tags'
import { SortingType } from './SortType/SortingType'
import { Search } from './Search/Search'
import { FC, memo } from 'react'

// TODO: wtf is memo!!!
export const Sorting: FC = memo(() => {
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
  },
)
