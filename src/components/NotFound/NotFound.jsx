import styles from './NotFound.module.scss'
import notFound from '../../assets/images/svg/404.svg'
import Button from '../common/Button/Button'

export default function NotFound() {
    return (
        <section className={styles.notFound}>
            <img src={notFound} alt='404.svg'/>
            <h1>Страница не найдена</h1>
            <p>Извините, но страницу, которую Вы пытаетесь найти - не существует. Предлагаем Вам перейти на Главную страницу</p>
            <Button
                isLink={true}
                link="/"
                    label="На главную"
                    style={{
                        padding: '18px 81px',
                        fontSize: '16px'
                    }}
            />
        </section>
    )
}
