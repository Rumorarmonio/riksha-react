import styles from './Header.module.scss'
import { HeaderTop } from './HeaderTop/HeaderTop'
import { HeaderBottom } from './HeaderBottom/HeaderBottom'
import { JSX } from 'react'

export function Header(): JSX.Element {
  return (
    <header className={styles.header}>
      <HeaderTop />
      <HeaderBottom />
    </header>
  )
}
