import styles from './NotFound.module.scss'
import notFount from '../../assets/images/svg/404.svg'
import {Button} from '../common/Button/Button'

export function NotFound() {
    return (
        <section className={styles.notFound}>
            <img src={notFount}/>
            <h1>Страница не найдена</h1>
            <p>Извините, но страницу, которую Вы пытаетесь найти - не существует. Предлагаем Вам перейти на Главную страницу</p>
            <Button link="https://www.google.com/"
                    label="На главную"
                    style={{
                        padding: '18px 81px',
                        fontSize: '16px'
                    }}
            />
        </section>
    )
}
