import {useDispatch} from 'react-redux'
import {addItem, minusItem, removeItem} from '../../../redux/slices/cartSlice'

import styles from './CartItem.module.scss'
import trashBin from '../../../assets/images/svg/cart/trash-bin.svg'
import {Product} from '../../../types/Product'
import {Dispatch} from '@reduxjs/toolkit'
import {ReactElement} from 'react'

type Props = { product: Product }

export function CartItem({product}: Props): ReactElement {
  const dispatch: Dispatch = useDispatch()

  function onClickPlus(): void {
    dispatch(addItem(product.id))
  }

  function onClickMinus(): void {
    dispatch(minusItem(product.id))
  }

  function onClickRemove(): void {
    if (window.confirm('Are you sure you want to remove this item?')) {
      dispatch(removeItem(product.id))
    }
  }

  return (
    <li className={styles.cartItem}>
      <div className={styles.left}>
        <img
          className={styles.image}
          src={product.image}
          alt="product.jpg"
        />
        <h1 className={styles.name}>
          {product.name}
        </h1>
      </div>
      <div className={styles.right}>
        <div className={styles.quantityContainer}>
          <span
            className={styles.button}
            onClick={onClickMinus}
          >
            -
          </span>
          <span
            className={styles.quantity}>
            {product.count}
          </span>
          <span
            className={styles.button}
            onClick={onClickPlus}
          >
            +
          </span>
        </div>
        <span className={styles.price}>
          {product.price * product.count} &#8381;
        </span>
        <img
          className={styles.trashBin}
          src={trashBin}
          onClick={onClickRemove}
          alt="trash-bin.svg"
        />
      </div>
    </li>
  )
}
