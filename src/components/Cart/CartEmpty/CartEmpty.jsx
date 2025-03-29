import empty from '../../../assets/images/svg/cart/empty.svg'

import styles from './CartEmpty.module.scss'
import Button from '../../common/Button/Button'

export function CartEmpty({ item }) {

  return (
    <section className={styles.empty}>
      <img className={styles.image} src={empty} alt="empty.svg"/>
      <span className={styles.title}>Ваша корзина пуста</span>
      <Button
        isLink={true}
        link="/"
        label="В каталог"
        style={{
          padding: '18px 81px',
          fontSize: '16px',
        }}
      />
    </section>
  )
}
