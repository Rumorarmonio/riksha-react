import styles from './Header.module.scss';
import {HeaderTop} from './HeaderTop/HeaderTop';
import {HeaderBottom} from './HeaderBottom/HeaderBottom';

export function Header() {
  return (
    <header className={styles.header}>
      <HeaderTop/>
      <HeaderBottom/>
    </header>
  );
}
