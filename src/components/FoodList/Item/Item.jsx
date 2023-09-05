import styles from './Item.module.scss'

export function Item({item, index, today}) {
    let leftColumn = null
    if (item.characteristics) {
        leftColumn =
            <ul className={styles.left}>
                {
                    item.characteristics.map((name, index) => (
                            <li key={index}>
                                <img className={styles.image}
                                     src={require(`../../../assets/images/svg/attributes/${name}.svg`)}
                                     alt={name.toString()}
                                />
                                <span className={styles.label}>{name}</span>
                            </li>
                        )
                    )
                }
            </ul>
    }

    // three months
    const timeCheck = today - item.dateAdded < 1000/*ms*/ * 60/*s*/ * 60/*min*/ * 24/*h*/ * 30/*days*/ * 3/*months*/
    const ordersCheck = item.orders >= 200
    const saleCheck = item.oldPrice !== null
    let rightColumn = null
    if (timeCheck || ordersCheck || saleCheck) {
        rightColumn =
            <ul className={styles.right}>
                {
                    ordersCheck &&
                    <li key={index}>
                        <img className={styles.image} src={require('../../../assets/images/svg/attributes/top.svg').default} alt="top"/>
                    </li>
                }

                {
                    timeCheck &&
                    <li key={index + 1}>
                        <img className={styles.image} src={require('../../../assets/images/svg/attributes/new.svg').default} alt="new"/>
                    </li>
                }

                {
                    saleCheck &&
                    <li key={index + 2}>
                        <img className={styles.image} src={require('../../../assets/images/svg/attributes/discount.svg').default} alt="discount"/>
                    </li>
                }
            </ul>
    }

    return (
        <li className={styles.item} key={index}>
            {leftColumn}
            <img className={styles.image} src={item.image} alt={item.name}/>
            {rightColumn}
            <div className={styles.container}>
                <div className={styles.details}>
                    <span className={styles.detail}>{item.weight}</span>
                    <i className={styles.dot}>&#8226;</i>
                    <span className={styles.detail}>{item.calories} Ккал</span>
                </div>
                <h3 className={styles.name}>{item.name}</h3>
                <span className={styles.ingredients}>{item.ingredients}</span>
                <div className={styles.bottom}>
                    <div className={styles.price}>
                        <span className={styles.old}>{item.oldPrice && item.oldPrice + '\u20BD'}&#160;</span>
                        <span className={styles.new}>{item.price} &#8381;</span>
                    </div>
                    <a className={styles.button} href="https://www.google.com/">Заказать</a>
                </div>
            </div>
        </li>
    )
}
