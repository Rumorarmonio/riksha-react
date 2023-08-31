import styles from './Header.module.scss'
import {HeaderUpper} from './HeaderUpper/HeaderUpper'
import {HeaderBottom} from './HeaderBottom/HeaderBottom'

export function Header() {
    return (
        <header className={styles.header}>
            <HeaderUpper/>
            <HeaderBottom/>
        </header>
    )
}
