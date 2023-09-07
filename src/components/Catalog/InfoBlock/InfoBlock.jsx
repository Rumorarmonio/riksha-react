import styles from './InfoBlock.module.scss'
import cooking1 from '../../../assets/images/png/cooking1.png'
import cooking2 from '../../../assets/images/png/cooking2.png'
import pattern from '../../../assets/images/svg/wavy-pattern-big.svg'

export function InfoBlock() {
    return (
        <div className={styles.infoBlock}>
            <div className={styles.left}>
                <h2 className={styles.title}>Доставка суши и роллов в Краснодаре</h2>

                <p className={styles.text}>
                    Почему роллы с океанической рыбой, овощами и японскими деликатесами стали любимым блюдом многих россиян? Во-первых, это очень полезно. Суши –
                    это идеально сбалансированная пища, многое на полезные жиры, белки и витамины. Во-вторых, суше хорошо утоляют голод.
                </p>

                <p className={styles.text}>
                    Вкусная доставка Рикша подарит Вам незабываемые вкусовые впечатления, украсит любой ваш стол и не заставит себя долго ждать. С нами вы сможете
                    забыть о готовке, легко сделать приятное родным и близким, устроить вкусный праздник или расслабится в кругу друзей. Все блюда готовятся
                    исключительно из свежих продуктов и по оригинальным рецептам Нашего шеф-повара.
                </p>

                <p className={styles.text}>
                    Любая позиция из Нашего Меню может оказаться у Вас на столе максимум через 60 минут! У вас есть возможность сделать предварительный заказ на
                    определенный день и время.
                </p>
            </div>
            <div className={styles.right}>
                <div className={styles.container}>
                    <img className={styles.front} src={cooking1} alt="cookech1"/>
                    <div className={styles.back}>
                        <img className={styles.image} src={cooking2} alt="cookech2"/>
                        <img className={styles.pattern} src={pattern} alt="pattern"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
