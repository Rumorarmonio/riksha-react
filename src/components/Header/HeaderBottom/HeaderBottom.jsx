import styles from './HeaderBottom.module.scss'

export function HeaderBottom() {
    const categories = [
        {
            name: 'Пицца',
            icon: require('../../../assets/images/svg/categories/pizza.svg').default
        },
        {
            name: 'Суши',
            icon: require('../../../assets/images/svg/categories/sushi.svg').default
        },
        {
            name: 'Роллы',
            icon: require('../../../assets/images/svg/categories/rolls.svg').default
        },
        {
            name: 'Сеты',
            icon: require('../../../assets/images/svg/categories/sets.svg').default
        },
        {
            name: 'Воки',
            icon: require('../../../assets/images/svg/categories/wok.svg').default
        },
        {
            name: 'Супы',
            icon: require('../../../assets/images/svg/categories/soups.svg').default
        },
        {
            name: 'Салаты',
            icon: require('../../../assets/images/svg/categories/salads.svg').default
        },
        {
            name: 'Десерты',
            icon: require('../../../assets/images/svg/categories/dessert.svg').default
        },
        {
            name: 'Напитки',
            icon: require('../../../assets/images/svg/categories/beverages.svg').default
        },
        {
            name: 'Акции',
            icon: require('../../../assets/images/svg/categories/promotions.svg').default
        },
    ]

    const categoryElements =
        categories.map(({name, icon}, index) => (
            <li key={index}>
                <a className={styles.category} href="https://www.google.com/">
                    <img className={styles.icon} src={icon} alt={name}/>
                    <span className={styles.name}>{name}</span>
                </a>
            </li>
        ))

    return (
        <div className={styles.bottom}>
            <div className={styles.wrapper}>
                <ul className={styles.categories}>
                    {categoryElements}
                </ul>
            </div>
        </div>
    )
}
