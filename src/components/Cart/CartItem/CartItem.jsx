import styles from './CartItem.module.scss'
import trashBin from '../../../assets/images/svg/cart/trash-bin.svg'

export function CartItem({id, item}) {
    return (
        <li className={styles.cartItem}>
            <div className={styles.left}>
                <img className={styles.image} src={item.image} alt="product.jpg"/>
                <h1 className={styles.name}>{item.name}</h1>
            </div>
            <div className={styles.right}>
                <div className={styles.quantityContainer}>
                    <span className={styles.button}>-</span>
                    <span className={styles.quantity}>1</span>
                    <span className={styles.button}>+</span>
                </div>
                <span className={styles.price}>{item.price} &#8381;</span>
                <img src={trashBin}/>
            </div>
        </li>
    )
}
