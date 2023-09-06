import styles from './Footer.module.scss'
import facebook from '../../assets/images/svg/socials/facebook.svg'
import instagram from '../../assets/images/svg/socials/instagram.svg'
import vk from '../../assets/images/svg/socials/vk.svg'
import logo from '../../assets/images/png/logo-footer.png'

export function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.wrapper}>
                <a className={styles.logo} href="https://www.google.com/">
                    <img src={logo} alt="logo"/>
                </a>
                <div className={styles.left}>
                    <ul className={styles.links}>
                        <li>
                            <a href="https://www.google.com/">О нас</a>
                        </li>
                        <li>
                            <a href="https://www.google.com/">Доставка и оплата</a>
                        </li>
                        <li>
                            <a href="https://www.google.com/">Контакты</a>
                        </li>
                    </ul>
                    <ul className={styles.socials}>
                        <li>
                            <a href="https://www.google.com/">
                                <img src={facebook} alt="facebook"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.google.com/">
                                <img src={instagram} alt="instagram"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.google.com/">
                                <img src={vk} alt="vk"/>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={styles.center}>
                    <ul className={styles.links}>
                        <li>
                            <a href="https://www.google.com/">Пицца</a>
                        </li>
                        <li>
                            <a href="https://www.google.com/">Суши</a>
                        </li>
                        <li>
                            <a href="https://www.google.com/">Роллы</a>
                        </li>
                        <li>
                            <a href="https://www.google.com/">Сеты</a>
                        </li>
                        <li>
                            <a href="https://www.google.com/">Воки</a>
                        </li>
                        <li>
                            <a href="https://www.google.com/">Супы</a>
                        </li>
                        <li>
                            <a href="https://www.google.com/">Салаты</a>
                        </li>
                        <li>
                            <a href="https://www.google.com/">Десерты</a>
                        </li>
                        <li>
                            <a href="https://www.google.com/">Напитки</a>
                        </li>
                        <li>
                            <a href="https://www.google.com/">Акции</a>
                        </li>
                    </ul>
                </div>
                <div className={styles.right}>
                    <a className={styles.number} href="tel:74956171424">+7 (495) 617-14-24</a>
                    <span className={styles.schedule}>c 10:00 до 23:00</span>
                    <span className={styles.copyright}>© Рикша. Все права защищены.</span>
                </div>
            </div>
        </div>
    )
}
