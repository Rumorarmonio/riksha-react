import {Link} from 'react-router-dom'

import styles from './HeaderUpper.module.scss'
import phone from '../../../assets/images/svg/header/phone-fill.svg'
import cart from '../../../assets/images/svg/header/cart.svg'
import profile from '../../../assets/images/svg/header/profile.svg'
import logo from '../../../assets/images/png/logo.png'
import {navigation} from '../../../assets/data/arrays'

export default function HeaderUpper() {
    const elements =
        navigation.map(({name, url}, index) => (
            <li className={styles.link} key={index}>
                <Link to={url}>{name}</Link>
            </li>
        ))

    return (
        <div className={styles.upper}>
            <div className={styles.wrapper}>
                <Link className={styles.logo} to="/">
                    <img src={logo} alt="logo"/>
                </Link>
                <div className={styles.empty}></div>
                <div className={styles.main}>
                    <ul className={styles.links}>
                        {elements}
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
                        <Link className={styles.icon} to="/cart">
                            <img src={cart} alt={'cart'}/>
                            <span className={styles.counter}>0</span>
                        </Link>
                    </div>
                    <Link className={styles.profile} to="/NotFound">
                        <img className={styles.icon} src={profile} alt={'profile'}/>
                    </Link>
                </div>
            </div>
        </div>
    )
}
