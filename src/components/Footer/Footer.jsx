import {Link} from 'react-router-dom'

import styles from './Footer.module.scss'
import logo from '../../assets/images/png/logo-footer.png'
import {categories, navigation, socials} from '../../assets/data/arrays'

export default function Footer() {
    const categoryElements =
        categories.map(({name, url}, index) => (
            <li key={index}>
                <Link to={url}>
                    {name}
                </Link>
            </li>
        ))

    const navigationElements =
        navigation.slice(0, 3).map(({name, url}, index) => (
            <li key={index}>
                <Link to={url}>{name}</Link>
            </li>
        ))

    const socialElements =
        socials.map(({name, icon, url}, index) => (
            <li key={index}>
                <a target="_blank" href={url}>
                    <img src={icon} alt={name}/>
                </a>
            </li>
        ))

    return (
        <div className={styles.footer}>
            <div className={styles.wrapper}>
                <Link className={styles.logo} to="/">
                    <img src={logo} alt="logo"/>
                </Link>
                <div className={styles.left}>
                    <ul className={styles.links}>
                        {navigationElements}
                    </ul>
                    <ul className={styles.socials}>
                        {socialElements}
                    </ul>
                </div>
                <div className={styles.center}>
                    <ul className={styles.links}>
                        {categoryElements}
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
