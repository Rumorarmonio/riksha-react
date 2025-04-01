import {Link} from 'react-router-dom'
import styles from './HeaderBottom.module.scss'
import {categories} from '../../../assets/data/arrays'
import {ReactElement} from 'react'

export function HeaderBottom(): ReactElement {
  const categoryElements: ReactElement[] =
    categories.map(({name, icon, url}: { name: string, icon: string, url: string }, index: number): ReactElement => (
      <li key={index}>
        <Link
          className={styles.category}
          to={url}
        >
          <img
            className={styles.icon}
            src={icon}
            alt={`${name}.svg`}
          />
          <span className={styles.name}>
            {name}
          </span>
        </Link>
      </li>
    ))

  return (
    <div className={styles.bottom}>
      <div className={styles.wrapper}>
        <ul className={styles.categories}>
          {
            categoryElements.map((element: ReactElement): ReactElement => (
                element
              ),
            )
          }
        </ul>
      </div>
    </div>
  )
}
