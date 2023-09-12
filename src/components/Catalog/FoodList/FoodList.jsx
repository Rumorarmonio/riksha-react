import React from 'react'
import styles from './FoodList.module.scss'
import Item from '../../common/Item/Item'
import Skeleton from '../../common/Item/Skeleton'

export default function FoodList({items, isLoading}) {
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
        </div>
    )
}
