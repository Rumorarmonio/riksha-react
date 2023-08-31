import styles from './Header.module.scss'
import phone from '../../assets/images/svg/phone-fill.svg'
import cart from '../../assets/images/svg/cart.svg'
import profile from '../../assets/images/svg/profile.svg'
import logo from '../../assets/images/png/logo.png'
import {HeaderUpper} from './HeaderUpper/HeaderUpper'

export function Header() {
    const categories = {
        'Пицца': require('../../assets/images/svg/categories/pizza.svg').default,
        'Суши': require('../../assets/images/svg/categories/sushi.svg').default,
        'Роллы': require('../../assets/images/svg/categories/rolls.svg').default,
        'Сеты': require('../../assets/images/svg/categories/sets.svg').default,
        'Вок': require('../../assets/images/svg/categories/wok.svg').default,
        'Супы': require('../../assets/images/svg/categories/soups.svg').default,
        'Салаты': require('../../assets/images/svg/categories/salads.svg').default,
        'Десерты': require('../../assets/images/svg/categories/dessert.svg').default,
        'Напитки': require('../../assets/images/svg/categories/beverages.svg').default,
        'Акции': require('../../assets/images/svg/categories/promotions.svg').default
    }

    const categoryElements =
        Object.entries(categories).map(([name, icon]) =>
            (
                <li>
                    <a className={styles.category} href="https://www.google.com/">
                        <img className={styles.icon} src={icon} alt={name}/>
                        <span className={styles.name}>{name}</span>
                    </a>
                </li>
            )
        )

    return (
        <header className="header">
            <HeaderUpper/>
            <div className={styles.bottom}>
                <div className={styles.wrapper}>
                    <ul className={styles.categories}>
                        {categoryElements}
                    </ul>
                </div>
            </div>
        </header>
    )
}
