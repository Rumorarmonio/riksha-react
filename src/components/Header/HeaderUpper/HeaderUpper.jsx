import styles from './HeaderUpper.module.scss'
import phone from '../../../assets/images/svg/header/phone-fill.svg'
import cart from '../../../assets/images/svg/header/cart.svg'
import profile from '../../../assets/images/svg/header/profile.svg'
import logo from '../../../assets/images/png/logo.png'

export function HeaderUpper() {
    return (
        <div className={styles.upper}>
            <div className={styles.wrapper}>
                <a className={styles.logo} href="https://www.google.com/">
                    <img src={logo} alt="logo"/>
                </a>
                <div className={styles.empty}></div>
                <div className={styles.main}>
                    <ul className={styles.links}>
                        <li className={styles.link}>
                            <a href="https://www.google.com/">О нас</a>
                        </li>
                        <li className={styles.link}>
                            <a href="https://www.google.com/">Доставка и оплата</a>
                        </li>
                        <li className={styles.link}>
                            <a href="https://www.google.com/">Контакты</a>
                        </li>
                        <li className={styles.link}>
                            <a href="https://www.google.com/">Бонусы</a>
                        </li>
                        <li className={styles.link}>
                            <a href="https://www.google.com/">Вакансии</a>
                        </li>
                    </ul>
                    <div className={styles.contacts}>
                        <div className={styles.phone}>
                            <img className={styles.icon} src={phone} alt={'phone'}/>
                            <a className={styles.number} href="tel:74956171424">+7 (495) 617-14-24</a>
                        </div>
                        <span className={styles.schedule}>c 10:00 до 23:00</span>
                    </div>
                    <div className={styles.cart}>
                        <span className={styles.sum}>0 &#8381;</span>
                        <div className={styles.delimiter}></div>
                        <a className={styles.icon} href="https://www.google.com/">
                            <img src={cart} alt={'cart'}/>
                            <span className={styles.counter}>0</span>
                        </a>
                    </div>
                    <a href="https://www.google.com/" className={styles.profile}>
                        <img className={styles.icon} src={profile} alt={'profile'}/>
                    </a>
                </div>
            </div>
        </div>
    )
}
