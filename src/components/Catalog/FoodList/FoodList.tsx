import React, {ReactElement} from 'react'
import styles from './FoodList.module.scss'
import {Item} from '../../common/Item/Item'
import {Skeleton} from '../../common/Item/Skeleton'
import {Pagination} from './Pagination/Pagination'
import {Product} from '../../../types/Product'

type Props = {
  items: Product[],
  status: string,
  currentPage: number,
  onChangePage: () => void
}

export function FoodList({items, status, currentPage, onChangePage}: Props): ReactElement {
  const today = new Date()

  const cards: ReactElement[] =
    status === 'loading'
      ?
      [...new Array(9)].map((_: any, index: number): ReactElement =>
        <Skeleton
          key={index}
        />,
      )
      :
      items.map((item: Product): ReactElement =>
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
            {
              cards.map((card: ReactElement): ReactElement => (
                  card
                ),
              )
            }
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
