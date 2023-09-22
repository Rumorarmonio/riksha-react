import React from 'react'
import styles from './FoodList.module.scss'
import Item from '../../common/Item/Item'
import Skeleton from '../../common/Item/Skeleton'
import {Pagination} from './Pagination/Pagination'

export default function FoodList({items, isLoading, currentPage, onChangePage}) {
    const today = new Date()

    const elements =
        isLoading
            ? [...new Array(9)].map((_, index) => <Skeleton key={index}/>)
            : items.map(item => <Item item={item} id={item.id} today={today} key={item.id}/>)

    return (
        <div className={styles.foodList}>
            {/*TODO: side decorations*/}
            {/*TODO: data for other types*/}
            <ul className={styles.wrapper}>
                {elements}
            </ul>
            <Pagination currentPage={currentPage} onChangePage={onChangePage}/>
        </div>
    )
}
