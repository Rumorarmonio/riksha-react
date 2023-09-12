import React from 'react'
import styles from './SortType.module.scss'
import {sortTypes} from '../../../../assets/data/arrays'

function SortType({value, onChange}) {
    const [open, setOpen] = React.useState(false)

    const onClickListItem = (i) => {
        onChange(i)
        setOpen(false)
    }

    return (
        <div className={styles.sortType}>
            <span className={styles.supTitle}>Сортировка</span>
            <div className={styles.button}
                 onClick={() => setOpen(!open)}>
                <span>{value.name}</span>
                <i className={`${styles.arrow} ${open ? styles.up : styles.down}`}></i>
            </div>
            {
                open && (
                    <div className={styles.popup}>
                        <ul>
                            {
                                sortTypes.map((type, index) => (
                                    <li className={value.sortProperty === index ? 'active' : ''}
                                        onClick={() => onClickListItem(type)}
                                        key={index}>
                                        {type.name}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                )
            }
        </div>
    )
}

export default SortType
