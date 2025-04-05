import { addItem, minusItem, removeItem } from '../../../redux/slices/cartSlice'

import styles from './CartItem.module.scss'
import trashBin from '../../../assets/images/svg/cart/trash-bin.svg'
import { Product } from '../../../types/Product'
import { JSX } from 'react'
import { useAppDispatch } from '../../../redux/store'

type Props = { product: Product }

export function CartItem({ product }: Props): JSX.Element {
  const dispatch = useAppDispatch()

  function onClickPlus(): void {
    const id: string = product.id
    dispatch(addItem({
      id,
    } as Product))
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
            {product.added}
          </span>
          <span
            className={styles.button}
            onClick={onClickPlus}
          >
            +
          </span>
        </div>
        <span className={styles.price}>
          {product.price * product.added} &#8381;
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
