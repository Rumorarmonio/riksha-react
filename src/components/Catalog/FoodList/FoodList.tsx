import React, { JSX } from 'react'
import styles from './FoodList.module.scss'
import { Item } from '../../common/Item/Item'
import { Skeleton } from '../../common/Item/Skeleton'
import { Pagination } from './Pagination/Pagination'
import { Product } from '../../../types/Product'

type Props = {
  items: Product[],
  status: string,
  currentPage: number,
  onChangePage: (number: number) => void
}

export function FoodList({ items, status, currentPage, onChangePage }: Props): JSX.Element {
  const today = new Date()

  const cards: JSX.Element[] =
    status === 'loading'
      ?
      [...new Array(9)].map((_: any, index: number): JSX.Element =>
        <Skeleton
          key={index}
        />,
      )
      :
      items.map((item: Product): JSX.Element =>
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
            {[...cards]}
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
