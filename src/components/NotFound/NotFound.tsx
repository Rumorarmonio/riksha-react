import styles from './NotFound.module.scss'
import notFound from '../../assets/images/svg/404.svg'
import { Button } from '../common/Button/Button'
import { JSX } from 'react'

export function NotFound(): JSX.Element {
  return (
    <section className={styles.notFound}>
      <img
        src={notFound}
        alt="404.svg"
      />
      <h1>Страница не найдена</h1>
      <p>Извините, но страницу, которую Вы пытаетесь найти - не существует. Предлагаем Вам перейти на Главную страницу</p>
      <Button
        isLink
        link="/"
        style={{
          padding: '18px 81px',
          fontSize: '16px',
        }}
      >
        На главную
      </Button>
    </section>
  )
}
