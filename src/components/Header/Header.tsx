import styles from './Header.module.scss'
import {HeaderTop} from './HeaderTop/HeaderTop'
import {HeaderBottom} from './HeaderBottom/HeaderBottom'
import {ReactElement} from 'react'

export function Header(): ReactElement {
  return (
    <header className={styles.header}>
      <HeaderTop/>
      <HeaderBottom/>
    </header>
  )
}
