import {Link} from 'react-router-dom'

import styles from './Button.module.scss'

export default function Button({isLink, link, label, style, ...buttonProps}) {
    return isLink ? (
        <Link className={styles.button} style={style} to={link}>
            {label}
        </Link>
    ) : (
        <button className={styles.button} style={style} {...buttonProps}>
            {label}
        </button>
    )
}
