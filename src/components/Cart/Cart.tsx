import styles from './Cart.module.scss'
import {useDispatch, useSelector} from 'react-redux'
import {clearItems, selectCart} from '../../redux/slices/cartSlice'
import {CartEmpty} from './CartEmpty/CartEmpty'
import {CartItem} from './CartItem/CartItem'
import {ReactElement} from 'react'
import {Dispatch} from '@reduxjs/toolkit'
import {Product} from '../../types/Product'

export function Cart(): ReactElement {
  const dispatch: Dispatch = useDispatch()
  const {totalPrice, items} = useSelector(selectCart)

  if (!totalPrice) {
    return <CartEmpty/>
  }

  const totalCount: number = items.reduce((sum: number, product: Product): number =>
      sum + product.count,
    0,
  )

  function onClickClear(): void {
    if (window.confirm('Are you sure you want to empty your shopping cart?')) {
      dispatch(clearItems())
    }
  }

  return (
    <section className={styles.cart}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <h2 className={styles.title}>
            Оформление заказа
          </h2>
          <span
            className={styles.clear}
            onClick={onClickClear}
          >
            Очистить корзину
          </span>
          <ul className={styles.list}>
            {
              items.map((product: Product): ReactElement =>
                <CartItem
                  key={product.id}
                  product={product}
                />)
            }
          </ul>
          <span className={styles.label}>
            Всего товаров: {totalCount} шт.
          </span>
          <span className={styles.label}>
            Сумма заказа: {totalPrice} &#8381;
          </span>
        </div>
        <div>
          details
        </div>
      </div>
    </section>
  )
}
