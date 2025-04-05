import { Link } from 'react-router-dom'

import styles from './Footer.module.scss'
import logo from '../../assets/images/png/logo-footer.png'
import { categories, navigationItems, socials } from '../../assets/data/data'
import { ImageLink } from '../../types/ImageLink'
import { NavigationItem } from '../../types/NavigationItem'
import { JSX } from 'react'

export function Footer(): JSX.Element {
  const navigationElements: JSX.Element[] = navigationItems.slice(0, 3).map(
    ({ name, url }: NavigationItem, index: number): JSX.Element => (
      <li key={index}>
        <Link to={url}>
          {name}
        </Link>
      </li>
    ),
  )

  const socialElements: JSX.Element[] = socials.map(
    ({ name, icon, url }: ImageLink, index: number): JSX.Element => (
      <li key={index}>
        <a href={url}>
          <img
            src={icon}
            alt={`${name}.svg`}
          />
        </a>
      </li>
    ),
  )

  const categoryElements: JSX.Element[] = categories.map(
    ({ name, url }: NavigationItem, index: number): JSX.Element => (
      <li key={index}>
        <Link to={url}>
          {name}
        </Link>
      </li>
    ),
  )

  return (
    <div className={styles.footer}>
      <div className={styles.wrapper}>
        <Link
          className={styles.logo}
          to="/"
        >
          <img
            src={logo}
            alt="logo.svg"
          />
        </Link>
        <div className={styles.left}>
          <ul className={styles.links}>
            {[...navigationElements]}
          </ul>
          <ul className={styles.socials}>
            {[...socialElements]}
          </ul>
        </div>
        <div className={styles.center}>
          <ul className={styles.links}>
            {[...categoryElements]}
          </ul>
        </div>
        <div className={styles.right}>
          <a className={styles.number} href="tel:74956171424">
            +7 (495) 617-14-24
          </a>
          <span className={styles.schedule}>
            c 10:00 до 23:00
          </span>
          <span className={styles.copyright}>
            © Рикша. Все права защищены.
          </span>
        </div>
      </div>
    </div>
  )
}
