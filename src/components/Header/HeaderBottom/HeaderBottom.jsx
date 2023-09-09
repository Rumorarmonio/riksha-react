import {Link} from 'react-router-dom'

import styles from './HeaderBottom.module.scss'
import {categories} from '../../../assets/data/menus'

export default function HeaderBottom() {
    const elements =
        categories.map(({name, icon, url}, index) => (
            <li key={index}>
                <Link className={styles.category} to={url}>
                    <img className={styles.icon} src={icon} alt={name}/>
                    <span className={styles.name}>{name}</span>
                </Link>
            </li>
        ))

    return (
        <div className={styles.bottom}>
            <div className={styles.wrapper}>
                <ul className={styles.categories}>
                    {elements}
                </ul>
            </div>
        </div>
    )
}
