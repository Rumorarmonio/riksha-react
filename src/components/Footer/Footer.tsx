import {Link} from 'react-router-dom'

import styles from './Footer.module.scss'
import logo from '../../assets/images/png/logo-footer.png'
import {categories, navigation, socials} from '../../assets/data/arrays'
import {ReactElement} from 'react'

export function Footer(): ReactElement {
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
            {
              navigation.slice(0, 3).map(({name, url}: { name: string, url: string }, index: number): ReactElement => (
                <li key={index}>
                  <Link to={url}>{name}</Link>
                </li>
              ))
            }
          </ul>
          <ul className={styles.socials}>
            {
              socials.map(({name, icon, url}: { name: string, icon: string, url: string }, index: number): ReactElement => (
                <li key={index}>
                  <a href={url}>
                    <img
                      src={icon}
                      alt={`${name}.svg`}
                    />
                  </a>
                </li>
              ))
            }
          </ul>
        </div>
        <div className={styles.center}>
          <ul className={styles.links}>
            {
              categories.map(({name, url}: { name: string, url: string }, index: number): ReactElement => (
                <li key={index}>
                  <Link to={url}>
                    {name}
                  </Link>
                </li>
              ))
            }
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
