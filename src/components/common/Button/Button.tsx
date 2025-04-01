import {Link} from 'react-router-dom'
import styles from './Button.module.scss'
import {ReactElement} from 'react'

type Props = {
  // TODO: может передаваться не только строки, но и элементы
  children: string,
  isLink?: boolean,
  link: string,
  style?: React.CSSProperties,
  // TODO: убрать этот атрибут
  onClick?: () => void,
}

export function Button({children, isLink, link, style, ...buttonProps}: Props): ReactElement {
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
