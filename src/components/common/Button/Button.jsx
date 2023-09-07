import styles from './Button.module.scss'

export function Button({link, label, style}) {
    return (
        <a className={styles.button} style={style} href={link}>
            {label}
        </a>
    )
}
