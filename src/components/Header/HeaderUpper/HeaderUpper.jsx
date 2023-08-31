import styles from './Header.module.scss'
import phone from '../../assets/images/svg/phone-fill.svg'
import cart from '../../assets/images/svg/cart.svg'
import profile from '../../assets/images/svg/profile.svg'
import logo from '../../assets/images/png/logo.png'

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
                    <a className={styles.category} href='https://www.google.com/'>
                        <img className={styles.icon} src={icon} alt={name}/>
                        <span className={styles.name}>{name}</span>
                    </a>
                </li>
            )
        )

    return (
        <header className='header'>
            <div className={styles.upper}>
                <div className={styles.wrapper}>
                    <a href='https://www.google.com/'>
                        <img className={styles.logo} src={logo} alt='logo'/>
                    </a>
                    <div className={styles.main}>
                        <ul className={styles.links}>
                            <li className={styles.link}>
                                <a href='https://www.google.com/'>О нас</a>
                            </li>
                            <li className={styles.link}>
                                <a href='https://www.google.com/'>Доставка и оплата</a>
                            </li>
                            <li className={styles.link}>
                                <a href='https://www.google.com/'>Контакты</a>
                            </li>
                            <li className={styles.link}>
                                <a href='https://www.google.com/'>Бонусы</a>
                            </li>
                            <li className={styles.link}>
                                <a href='https://www.google.com/'>Вакансии</a>
                            </li>
                        </ul>
                        <div className={styles.contacts}>
                            <div className={styles.phone}>
                                <img className={styles.icon} src={phone} alt={'phone'}/>
                                <a className={styles.number} href='tel:74956171424'>+7 (495) 617-14-24</a>
                            </div>
                            <span className={styles.schedule}>c 10:00 до 23:00</span>
                        </div>
                        <div className={styles.cart}>
                            <span className={styles.sum}>0 &#8381;</span>
                            <div className={styles.delimiter}></div>
                            <a className={styles.icon} href='https://www.google.com/'>
                                <img src={cart} alt={'cart'}/>
                            </a>
                        </div>
                        <a href='https://www.google.com/' className={styles.profile}>
                            <img className={styles.icon} src={profile} alt={'profile'}/>
                        </a>
                    </div>
                </div>
            </div>
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
