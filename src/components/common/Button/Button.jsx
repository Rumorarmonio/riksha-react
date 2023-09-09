import {Link} from 'react-router-dom'

import styles from './Button.module.scss'

export default function Button({link, label, style}) {
    return (
        <Link className={styles.button} style={style} to={link}>
            {label}
        </Link>
    )
}
