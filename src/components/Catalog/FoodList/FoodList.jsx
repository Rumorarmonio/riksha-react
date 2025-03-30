import React from 'react'
import styles from './FoodList.module.scss'
import Item from '../../common/Item/Item'
import Skeleton from '../../common/Item/Skeleton'
import {Pagination} from './Pagination/Pagination'

export default function FoodList({ items, status, currentPage, onChangePage }) {
  const today = new Date()

  const cards =
    status === 'loading'
      ?
      [...new Array(9)].map((_, index) =>
        <Skeleton
          key={index}
        />,
      )
      :
      items.map(item =>
        <Item
          key={item.id}
          product={item}
          id={item.id}
          today={today}
        />,
      )

  return (
    <div className={styles.foodList}>
      {/*TODO: side decorations*/}
      {/*TODO: data for other types*/}
      {
        status === 'error' ? (
          <h1>
            Error! Error! Error! Error! Error! Error! Error! Error! Error! Error!
          </h1>
        ) : (
          <ul className={styles.wrapper}>
            {cards}
          </ul>
        )
      }
      <Pagination
        currentPage={currentPage}
        onChangePage={onChangePage}
      />
    </div>
  )
}
