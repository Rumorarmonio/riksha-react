import styles from './FoodList.module.scss'
import {Item} from './Item/Item'

export function FoodList() {
    const chars = {SPICY: 'spicy', BAKED: 'baked', VEGAN: 'vegan'}

    const items = [
        {
            name: 'Ролл "Филадельфия"',
            image: require('../../assets/images/png/rolls/philadelphia.png'),
            weight: '200 грамм',
            calories: 130,
            ingredients: 'Лосось, сыр "Филадельфия", огурец, авокадо',
            price: 219,
            oldPrice: 269,
            orders: 228,
            dateAdded: new Date('2023-09-05T16:45:30'),
            characteristics: [chars.VEGAN]
        },
        {
            name: 'Ролл "Сливочная креветка"',
            image: require('../../assets/images/png/rolls/shrimp.png'),
            weight: '200 грамм',
            calories: 130,
            ingredients: 'Лосось, сыр "Филадельфия", огурец, авокадо',
            price: 219,
            oldPrice: 224,
            orders: 180,
            dateAdded: new Date('2022-09-05T16:45:30'),
            characteristics: null
        },
        {
            name: 'Ролл "Чикен энд Чиз"',
            image: require('../../assets/images/png/rolls/philadelphia.png'),
            weight: '200 грамм',
            calories: 130,
            ingredients: 'Лосось, сыр "Филадельфия", огурец, авокадо',
            price: 199,
            oldPrice: 232,
            orders: 150,
            dateAdded: new Date('2023-09-05T16:45:30'),
            characteristics: [chars.SPICY]
        },
        {
            name: 'Ролл "Филадельфия"',
            image: require('../../assets/images/png/rolls/philadelphia.png'),
            weight: '200 грамм',
            calories: 130,
            ingredients: 'Лосось, сыр "Филадельфия", огурец, авокадо',
            price: 219,
            oldPrice: 269,
            orders: 228,
            dateAdded: new Date('2023-09-05T16:45:30'),
            characteristics: [chars.VEGAN]
        },
        {
            name: 'Ролл "Сливочная креветка"',
            image: require('../../assets/images/png/rolls/shrimp.png'),
            weight: '200 грамм',
            calories: 130,
            ingredients: 'Лосось, сыр "Филадельфия", огурец, авокадо',
            price: 219,
            oldPrice: 224,
            orders: 180,
            dateAdded: new Date('2022-09-05T16:45:30'),
            characteristics: null
        },
        {
            name: 'Ролл "Чикен энд Чиз"',
            image: require('../../assets/images/png/rolls/philadelphia.png'),
            weight: '200 грамм',
            calories: 130,
            ingredients: 'Лосось, сыр "Филадельфия", огурец, авокадо',
            price: 199,
            oldPrice: 232,
            orders: 150,
            dateAdded: new Date('2023-09-05T16:45:30'),
            characteristics: [chars.SPICY, chars.BAKED]
        },
        {
            name: 'Ролл "Филадельфия"',
            image: require('../../assets/images/png/rolls/philadelphia.png'),
            weight: '200 грамм',
            calories: 130,
            ingredients: 'Лосось, сыр "Филадельфия", огурец, авокадо',
            price: 219,
            oldPrice: 269,
            orders: 228,
            dateAdded: new Date('2023-09-05T16:45:30'),
            characteristics: [chars.VEGAN]
        },
        {
            name: 'Ролл "Сливочная креветка"',
            image: require('../../assets/images/png/rolls/shrimp.png'),
            weight: '200 грамм',
            calories: 130,
            ingredients: 'Лосось, сыр "Филадельфия", огурец, авокадо',
            price: 219,
            oldPrice: 224,
            orders: 180,
            dateAdded: new Date('2022-09-05T16:45:30'),
            characteristics: null
        },
        {
            name: 'Ролл "Чикен энд Чиз"',
            image: require('../../assets/images/png/rolls/philadelphia.png'),
            weight: '200 грамм',
            calories: 130,
            ingredients: 'Лосось, сыр "Филадельфия", огурец, авокадо',
            price: 199,
            oldPrice: 232,
            orders: 150,
            dateAdded: new Date('2023-09-05T16:45:30'),
            characteristics: [chars.SPICY]
        },
    ]

    const today = new Date()

    const elements =
        items.map((item, index) =>
            (
                <Item item={item} index={index} today={today} key={index}/>
            )
        )

    return (
        <div className={styles.foodList}>
            <ul className={styles.wrapper}>
                {elements}
            </ul>
        </div>
    )
}
