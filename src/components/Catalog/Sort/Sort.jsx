import styles from './Sort.module.scss'
import {Tags} from './Categories/Tags'
import SortType from './SortType/SortType'

export function Sort() {
    return (
        <div className={styles.sort}>
            <div className={styles.wrapper}>
                <Tags/>
                <SortType/>
            </div>
        </div>
    )
}
