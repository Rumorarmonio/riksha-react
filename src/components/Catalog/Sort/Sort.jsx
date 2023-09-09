import styles from './Sort.module.scss'
import Tags from './Tags/Tags'
import SortType from './SortType/SortType'

export default function Sort() {
    return (
        <div className={styles.sort}>
            <div className={styles.wrapper}>
                <Tags/>
                <SortType/>
            </div>
        </div>
    )
}
