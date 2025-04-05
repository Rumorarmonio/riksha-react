import { Link } from 'react-router-dom'
import styles from './HeaderBottom.module.scss'
import { categories } from '../../../assets/data/data'
import { JSX } from 'react'
import { ImageLink } from '../../../types/ImageLink'

export function HeaderBottom(): JSX.Element {
  const categoryElements: JSX.Element[] =
    categories.map(({ name, icon, url }: ImageLink, index: number): JSX.Element => (
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
          {[...categoryElements]}
        </ul>
      </div>
    </div>
  )
}
