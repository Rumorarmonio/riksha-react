import styles from './Search.module.scss'
import search from '../../../../assets/images/svg/search/search.svg'
import close from '../../../../assets/images/svg/search/close.svg'

export function Search({value, onChange}) {
    return (
        <div className={styles.search}>
            <img className={styles.icon} src={search} alt="search.svg"/>
            <input
                value={value}
                onChange={event => onChange(event.target.value)}
                className={styles.input}
                placeholder="Поиск..."
            />
            {
                value && (
                    <img className={styles.clearIcon} onClick={() => onChange('')} src={close} alt="close.svg"/>
                )
            }
        </div>
    )
}
