import React from 'react'
import styles from './SortType.module.scss'

function SortType() {
    const [open, setOpen] = React.useState(false)
    const [selected, setSelected] = React.useState(0)

    const list = ['По умолчанию', 'популярности (DESC)', 'популярности (ASC)', 'цене (DESC)', 'цене (ASC)', 'алфавиту (DESC)', 'алфавиту (ASC)']

    let sortName = list[selected]

    const onClickListItem = (i) => {
        setSelected(i)
        setOpen(false)
    }

    return (
        <div className={styles.sortType}>
            <span className={styles.supTitle}>Сортировка</span>
            <div className={styles.button}
                 onClick={() => setOpen(!open)}>
                <span>{sortName}</span>
                <i className={`${styles.arrow} ${open ? styles.up : styles.down}`}></i>
            </div>
            {
                open && (
                    <div className={styles.popup}>
                        <ul>
                            {
                                list.map((name, index) => (
                                    <li className={selected === index ? 'active' : ''}
                                        onClick={() => onClickListItem(index)}
                                        key={index}>
                                        {name}
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
