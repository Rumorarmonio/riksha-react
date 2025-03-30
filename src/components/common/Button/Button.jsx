import {Link} from 'react-router-dom'
import styles from './Button.module.scss'

export default function Button({ children, isLink, link, style, ...buttonProps }) {
  return isLink ? (
    <Link
      className={styles.button}
      style={style}
      to={link}
      {...buttonProps}
    >
      {children}
    </Link>
  ) : (
    <button
      className={styles.button}
      style={style}
      {...buttonProps}
    >
      {children}
    </button>
  )
}
