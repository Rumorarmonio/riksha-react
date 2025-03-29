import {useDispatch} from 'react-redux'
import {addItem, minusItem, removeItem} from '../../../redux/slices/cartSlice'

import styles from './CartItem.module.scss'
import trashBin from '../../../assets/images/svg/cart/trash-bin.svg'

export function CartItem({ item }) {
  const dispatch = useDispatch()

  const onClickPlus = () => {
    dispatch(addItem(item.id))
  }

  const onClickMinus = () => {
    dispatch(minusItem(item.id))
  }

  const onClickRemove = () => {
    if (window.confirm('Are you sure you want to remove this item?')) {
      dispatch(removeItem(item.id))
    }
  }

  return (
    <li className={styles.cartItem}>
      <div className={styles.left}>
        <img className={styles.image} src={item.image} alt="product.jpg"/>
        <h1 className={styles.name}>{item.name}</h1>
      </div>
      <div className={styles.right}>
        <div className={styles.quantityContainer}>
          <span className={styles.button} onClick={onClickMinus}>-</span>
          <span className={styles.quantity}>{item.count}</span>
          <span className={styles.button} onClick={onClickPlus}>+</span>
        </div>
        <span className={styles.price}>{item.price * item.count} &#8381;</span>
        <img className={styles.trashBin} src={trashBin} onClick={onClickRemove} alt="trash-bin.svg"/>
      </div>
    </li>
  )
}
