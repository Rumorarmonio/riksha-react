import styles from './Tags.module.scss'

export function Tags() {
    const ingredients = [
        {
            name: 'Лосось',
            icon: require('../../../assets/images/png/ingredients/salmon.png')
        },
        {
            name: 'Тунец',
            icon: require('../../../assets/images/png/ingredients/tuna.png')
        },
        {
            name: 'Угорь',
            icon: require('../../../assets/images/png/ingredients/eel.png')
        },
        {
            name: 'Креветка',
            icon: require('../../../assets/images/png/ingredients/shrimp.png')
        },
        {
            name: 'Краб',
            icon: require('../../../assets/images/png/ingredients/crab.png')
        },
        {
            name: 'Мидии',
            icon: require('../../../assets/images/png/ingredients/mussels.png')
        }
    ]

    const attributes = [
        {
            name: 'Острое',
            icon: require('../../../assets/images/svg/attributes/spicy.svg').default
        },
        {
            name: 'Запеченный ролл',
            icon: require('../../../assets/images/svg/attributes/baked.svg').default
        },
        {
            name: 'Vegan',
            icon: require('../../../assets/images/svg/attributes/vegan.svg').default
        },
        {
            name: 'ТОП-позиции',
            icon: require('../../../assets/images/svg/attributes/top.svg').default
        },
        {
            name: 'Новинки',
            icon: require('../../../assets/images/svg/attributes/new.svg').default
        },
        {
            name: 'Скидки',
            icon: require('../../../assets/images/svg/attributes/discount.svg').default
        },
    ]

    function createElements(items) {
        return items.map(({name, icon}, index) => (
            <li key={index}>
                <a className={styles.tag} href="https://www.google.com/">
                    <img className={styles.icon} src={icon} alt={name}/>
                    <span className={styles.name}>{name}</span>
                </a>
            </li>
        ))
    }

    return (
        <div className={styles.tags}>
            <span className={styles.breadcrumbs}>Главная&nbsp;&nbsp;//&nbsp;&nbsp;<b>Суши</b></span>
            <h2 className={styles.title}>Суши</h2>
            <ul className={styles.list}>
                {createElements(ingredients)}
            </ul>
            <ul className={styles.list}>
                {createElements(attributes)}
            </ul>
        </div>
    )
}
