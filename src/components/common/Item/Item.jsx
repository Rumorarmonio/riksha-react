import styles from './Item.module.scss'
import Button from '../Button/Button'

export default function Item({item, id, today}) {
    const values = ['spicy', 'baked', 'vegan']
    let leftColumn = null
    if (item.characteristics) {
        leftColumn =
            (
                <ul className={styles.left}>
                    {
                        item.characteristics.map((name, index) => {
                                if (values.includes(name)) {
                                    return (
                                        <li key={index}>
                                            <img className={styles.image}
                                                 src={require(`../../../assets/images/svg/attributes/${name}.svg`)}
                                                 alt={`${name}.svg`}
                                            />
                                            <span className={styles.label}>{name}</span>
                                        </li>
                                    )
                                } else {
                                    return null
                                }
                            }
                        )
                    }
                </ul>
            )
    }

    // three months
    const timeCheck = today - Date.parse(item.dateAdded) < 1000/*ms*/ * 60/*s*/ * 60/*min*/ * 24/*h*/ * 30/*days*/ * 3/*months*/
    const ordersCheck = item.orders >= 800
    const saleCheck = item.oldPrice !== null
    let rightColumn = null
    if (timeCheck || ordersCheck || saleCheck) {
        rightColumn =
            (
                <ul className={styles.right}>
                    {
                        ordersCheck &&
                        <li key={id}>
                            <img className={styles.image} src={require('../../../assets/images/svg/attributes/top.svg').default} alt="top.svg"/>
                        </li>
                    }

                    {
                        timeCheck &&
                        <li key={id + 1}>
                            <img className={styles.image} src={require('../../../assets/images/svg/attributes/new.svg').default} alt="new.svg"/>
                        </li>
                    }

                    {
                        saleCheck &&
                        <li key={id + 2}>
                            <img className={styles.image} src={require('../../../assets/images/svg/attributes/discount.svg').default} alt="discount.svg"/>
                        </li>
                    }
                </ul>
            )
    }

    return (
        <li className={styles.item} key={id}>
            {leftColumn}
            <img className={styles.image} src={item.image} alt={item.name}/>
            {rightColumn}
            <div className={styles.container}>
                <div className={styles.upper}>
                    <div className={styles.details}>
                        <span className={styles.detail}>{item.weight} г</span>
                        <i className={styles.dot}>&#8226;</i>
                        <span className={styles.detail}>{item.calorieContent} Ккал</span>
                    </div>
                    <h3 className={styles.name}>{item.name}</h3>
                    <span className={styles.ingredients}>{item.ingredients.join(', ')}</span>
                </div>

                <div className={styles.bottom}>
                    <div className={styles.price}>
                        <span className={styles.old}>{item.oldPrice && item.oldPrice + '\u20BD'}&#160;</span>
                        <span className={styles.new}>{item.price} &#8381;</span>
                    </div>
                    <Button link="/details"
                            label="Заказать"
                            style={{
                                marginTop: '7px',
                                padding: '13px 60px'
                            }}
                    />
                </div>
            </div>
        </li>
    )
}
