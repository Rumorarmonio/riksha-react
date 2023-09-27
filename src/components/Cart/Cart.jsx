import {CartItem} from './CartItem/CartItem'
import styles from './Cart.module.scss'
import {useDispatch, useSelector} from 'react-redux'

export default function Cart() {
    const dispatch = useDispatch()
    const items = useSelector((state) => state.cart.items)

    return (
        <section className={styles.cart}>
            <div className={styles.wrapper}>
                <div className={styles.left}>
                    <h2 className={styles.title}>
                        Оформление заказа
                    </h2>
                    <ul className={styles.list}>
                        {
                            items.map(item => <CartItem key={item.id} item={item}/>)
                        }
                    </ul>
                </div>
                <div>
                    details
                </div>
            </div>
        </section>
    )
}
