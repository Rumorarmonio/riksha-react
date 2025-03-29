import {CartItem} from './CartItem/CartItem'
import styles from './Cart.module.scss'
import {useDispatch, useSelector} from 'react-redux'
import {clearItems} from '../../redux/slices/cartSlice'
import {CartEmpty} from './CartEmpty/CartEmpty'

export default function Cart() {
  const dispatch = useDispatch()
  const { totalPrice, items } = useSelector((state) => state.cart)

  if (!totalPrice) {
    return <CartEmpty/>
  }

  const totalCount = items.reduce((sum, item) => sum + item.count, 0)

  const onClickClear = () => {
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
          <span className={styles.clear} onClick={onClickClear}>Очистить корзину</span>
          <ul className={styles.list}>
            {
              items.map(item => <CartItem key={item.id} item={item}/>)
            }
          </ul>
          <span className={styles.label}>Всего товаров: {totalCount} шт.</span>
          <span className={styles.label}>Сумма заказа: {totalPrice} &#8381;</span>
        </div>
        <div>
          details
        </div>
      </div>
    </section>
  )
}
