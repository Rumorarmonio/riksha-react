import React from 'react'
import styles from './FoodList.module.scss'
import Item from '../../common/Item/Item'
import Skeleton from '../../common/Item/Skeleton'

export default function FoodList() {
    const chars = {SPICY: 'spicy', BAKED: 'baked', VEGAN: 'vegan'}

    // const items = [
    //     {
    //         name: 'Ролл "Филадельфия"',
    //         image: require('../../../assets/images/png/rolls/philadelphia.png'),
    //         weight: '200 грамм',
    //         calories: 130,
    //         ingredients: 'Лосось, сыр "Филадельфия", огурец, авокадо',
    //         price: 219,
    //         oldPrice: 269,
    //         orders: 228,
    //         dateAdded: new Date('2023-09-05T16:45:30'),
    //         characteristics: [chars.VEGAN]
    //     },
    //     {
    //         name: 'Ролл "Сливочная креветка"',
    //         image: require('../../../assets/images/png/rolls/shrimp.png'),
    //         weight: '200 грамм',
    //         calories: 130,
    //         ingredients: 'Лосось, сыр "Филадельфия", огурец, авокадо',
    //         price: 219,
    //         oldPrice: 224,
    //         orders: 180,
    //         dateAdded: new Date('2022-09-05T16:45:30'),
    //         characteristics: null
    //     },
    //     {
    //         name: 'Ролл "Чикен энд Чиз"',
    //         image: require('../../../assets/images/png/rolls/philadelphia.png'),
    //         weight: '200 грамм',
    //         calories: 130,
    //         ingredients: 'Лосось, сыр "Филадельфия", огурец, авокадо',
    //         price: 199,
    //         oldPrice: 232,
    //         orders: 150,
    //         dateAdded: new Date('2023-09-05T16:45:30'),
    //         characteristics: [chars.SPICY]
    //     },
    //     {
    //         name: 'Ролл "Филадельфия"',
    //         image: require('../../../assets/images/png/rolls/philadelphia.png'),
    //         weight: '200 грамм',
    //         calories: 130,
    //         ingredients: 'Лосось, сыр "Филадельфия", огурец, авокадо',
    //         price: 219,
    //         oldPrice: 269,
    //         orders: 228,
    //         dateAdded: new Date('2023-09-05T16:45:30'),
    //         characteristics: [chars.VEGAN]
    //     },
    //     {
    //         name: 'Ролл "Сливочная креветка"',
    //         image: require('../../../assets/images/png/rolls/shrimp.png'),
    //         weight: '200 грамм',
    //         calories: 130,
    //         ingredients: 'Лосось, сыр "Филадельфия", огурец, авокадо',
    //         price: 219,
    //         oldPrice: 224,
    //         orders: 180,
    //         dateAdded: new Date('2022-09-05T16:45:30'),
    //         characteristics: null
    //     },
    //     {
    //         name: 'Ролл "Чикен энд Чиз"',
    //         image: require('../../../assets/images/png/rolls/philadelphia.png'),
    //         weight: '200 грамм',
    //         calories: 130,
    //         ingredients: 'Лосось, сыр "Филадельфия", огурец, авокадо',
    //         price: 199,
    //         oldPrice: 232,
    //         orders: 150,
    //         dateAdded: new Date('2023-09-05T16:45:30'),
    //         characteristics: [chars.SPICY, chars.BAKED]
    //     },
    //     {
    //         name: 'Ролл "Филадельфия"',
    //         image: require('../../../assets/images/png/rolls/philadelphia.png'),
    //         weight: '200 грамм',
    //         calories: 130,
    //         ingredients: 'Лосось, сыр "Филадельфия", огурец, авокадо',
    //         price: 219,
    //         oldPrice: 269,
    //         orders: 228,
    //         dateAdded: new Date('2023-09-05T16:45:30'),
    //         characteristics: [chars.VEGAN]
    //     },
    //     {
    //         name: 'Ролл "Сливочная креветка"',
    //         image: require('../../../assets/images/png/rolls/shrimp.png'),
    //         weight: '200 грамм',
    //         calories: 130,
    //         ingredients: 'Лосось, сыр "Филадельфия", огурец, авокадо',
    //         price: 219,
    //         oldPrice: 224,
    //         orders: 180,
    //         dateAdded: new Date('2022-09-05T16:45:30'),
    //         characteristics: null
    //     },
    //     {
    //         name: 'Ролл "Чикен энд Чиз"',
    //         image: require('../../../assets/images/png/rolls/philadelphia.png'),
    //         weight: '200 грамм',
    //         calories: 130,
    //         ingredients: 'Лосось, сыр "Филадельфия", огурец, авокадо',
    //         price: 199,
    //         oldPrice: 232,
    //         orders: 150,
    //         dateAdded: new Date('2023-09-05T16:45:30'),
    //         characteristics: [chars.SPICY]
    //     },
    // ]

    // const items = [
    //     {
    //         name: 'Ролл "Блум"',
    //         image: 'https://x100-venus-sm-ru.gumlet.io/SKU/SUSHI-MASTER/%D0%A0%D0%BE%D0%BB%D0%BB%D1%8B/B2D71251-58F3-11ED-B8F3-9B6A5D8DF999-%D0%90%D0%BC-%D0%9D%D1%8F%D0%BC.jpg?alt=media&token=f9187141-d560-4357-9108-fecc213462d1&w=1920&h=1080&format=webp&mode=fit&q=60',
    //         weight: 205,
    //         quantity: 8,
    //         calories: 130,
    //         ingredients: 'Угорь, сыр сливочный "Cremette", капуста пекинская, майонез, кунжут, соус Унаги, рис, нори',
    //         price: 339,
    //         oldPrice: 399,
    //         orders: 228,
    //         dateAdded: new Date('2023-09-05T16:45:30'),
    //         characteristics: [chars.VEGAN]
    //     },
    //     {
    //         name: 'Ролл "Чебурашка"',
    //         image: 'https://x100-venus-sm-ru.gumlet.io/SKU/SUSHI-MASTER/%D0%A0%D0%BE%D0%BB%D0%BB%D1%8B/F5585EE1-58F3-11ED-B8F3-9B6A5D8DF999-%D0%97%D0%B0%D1%80%D1%8F%D0%B4%D0%B8%D1%81%D1%8C.jpg?alt=media&token=3e5629c6-b12e-4766-865e-83f22fff947d&w=1920&h=1080&format=webp&mode=fit&q=60',
    //         weight: 245,
    //         quantity: 8,
    //         calories: 130,
    //         ingredients: 'Креветка, сыр сливочный "Cremette", лук фри, соус цезарь, капуста пекинская, кляр, сухари панко, рис, нори',
    //         price: 299,
    //         oldPrice: 339,
    //         orders: 180,
    //         dateAdded: new Date('2022-09-05T16:45:30'),
    //         characteristics: null
    //     },
    //     {
    //         name: 'Ролл "Дзен"',
    //         image: 'https://x100-venus-sm-ru.gumlet.io/SKU/SUSHI-MASTER/%D0%A0%D0%BE%D0%BB%D0%BB%D1%8B/0D1AD441-58F4-11ED-AF10-0B0125BB47B4-%D0%97%D0%B2%D0%BE%D0%BD%D0%BE%D0%BA-%D0%B4%D1%80%D1%83%D0%B3%D1%83.jpg?alt=media&token=7dfd4924-5b57-4a7d-ac62-0b6c27f90e11&w=1920&h=1080&format=webp&mode=fit&q=60',
    //         weight: 235,
    //         quantity: 8,
    //         calories: 130,
    //         ingredients: 'Лосось, сыр "Филадельфия", огурец, авокадо',
    //         price: 369,
    //         oldPrice: null,
    //         orders: 150,
    //         dateAdded: new Date('2023-09-05T16:45:30'),
    //         characteristics: [chars.BAKED]
    //     },
    //     {
    //         name: 'Ролл "Филадельфия классика"',
    //         image: 'https://x100-venus-sm-ru.gumlet.io/SKU/SUSHI-MASTER/%D0%A0%D0%BE%D0%BB%D0%BB%D1%8B/CEF5FA81-FB5D-11EC-A686-93C9D3D494AC-%D1%84%D0%B8%D0%BB%D0%B0%D0%B4%D0%B5%D0%BB%D1%8C%D1%84%D0%B8%D1%8F-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F_22863.jpg?alt=media&token=5b7f793d-12ac-499d-aa28-39d8332a5d8a&w=1920&h=1080&format=webp&mode=fit&q=60',
    //         weight: 235,
    //         quantity: 8,
    //         calories: 130,
    //         ingredients: 'Лосось, рис, сыр сливочный "Cremette", водоросли нори',
    //         price: 500,
    //         oldPrice: 559,
    //         orders: 228,
    //         dateAdded: new Date('2022-09-05T16:45:30'),
    //         characteristics: [chars.VEGAN]
    //     },
    //     {
    //         name: 'Ролл "Лосось кинг"',
    //         image: 'https://x100-venus-sm-ru.gumlet.io/SKU/SUSHI-MASTER/%D0%A0%D0%BE%D0%BB%D0%BB%D1%8B/C89390E1-6BFF-11ED-94D5-55972109B354-%D0%9B%D0%BE%D1%81%D0%BE%D1%81%D1%8C%20%D0%BA%D0%B8%D0%BD%D0%B3.jpg?alt=media&token=e6b2159b-ee75-4e13-89f6-89b5b7ac4a54&w=1920&h=1080&format=webp&mode=fit&q=60',
    //         weight: 180,
    //         quantity: 8,
    //         calories: 130,
    //         ingredients: 'Лосось, сыр сливочный "Cremette", кунжут, рис, нори',
    //         price: 480,
    //         oldPrice: 549,
    //         orders: 180,
    //         dateAdded: new Date('2022-09-05T16:45:30'),
    //         characteristics: null
    //     },
    //     {
    //         name: 'Ролл "Филадельфия лайт сяке"',
    //         image: 'https://x100-venus-sm-ru.gumlet.io/SKU/SUSHI-MASTER/%D0%A0%D0%BE%D0%BB%D0%BB%D1%8B/DA66E730-FB5D-11EC-84C6-2192BE393745-%D1%84%D0%B8%D0%BB%D0%B0%D0%B4%D0%B5%D0%BB%D1%8C%D1%84%D0%B8%D1%8F-%D0%BB%D0%B0%D0%B9%D1%82-%D1%81%D1%8F%D0%BA%D0%B5--c-%D0%BE%D0%B3%D1%83%D1%80%D1%86%D0%BE%D0%BC_22885.jpg?alt=media&token=b81e67f3-f30e-4fe9-a1bf-3db5f6e15e8e&w=1920&h=1080&format=webp&mode=fit&q=60',
    //         weight: 200,
    //         quantity: 8,
    //         calories: 130,
    //         ingredients: 'Лосось, рис, сыр сливочный "Cremette", свежий огурец, водоросли нори',
    //         price: 379,
    //         oldPrice: 400,
    //         orders: 150,
    //         dateAdded: new Date('2022-09-05T16:45:30'),
    //         characteristics: [chars.VEGAN]
    //     },
    //     {
    //         name: 'Ролл "Цезарь запечённый"',
    //         image: 'https://x100-venus-sm-ru.gumlet.io/SKU/SUSHI-MASTER/%D0%A0%D0%BE%D0%BB%D0%BB%D1%8B/10D70F71-FB5E-11EC-84C6-2192BE393745-%D1%86%D0%B5%D0%B7%D0%B0%D1%80%D1%8C-%D1%80%D0%BE%D0%BB%D0%BB_23177.jpg?alt=media&token=a15dfdb9-0002-4366-8ee4-1652446624d9&w=1920&h=1080&format=webp&mode=fit&q=60',
    //         weight: 230,
    //         quantity: 8,
    //         calories: 130,
    //         ingredients: 'Филе грудки цыпленка, рис, сыр сливочный "Cremette", свежие помидоры, соус нежный (сыр моцарелла, майонез, чеснок), лист салата, водоросли нори\n' +
    //             '\n',
    //         price: 289,
    //         oldPrice: null,
    //         orders: 228,
    //         dateAdded: new Date('2022-09-05T16:45:30'),
    //         characteristics: [chars.BAKED]
    //     },
    //     {
    //         name: 'Ролл "Сяке лайт"',
    //         image: 'https://x100-venus-sm-ru.gumlet.io/SKU/SUSHI-MASTER/%D0%A0%D0%BE%D0%BB%D0%BB%D1%8B/00706921-FB5D-11EC-BD01-41982C07A620-%D1%81%D1%8F%D0%BA%D0%B5-%D0%BB%D0%B0%D0%B9%D1%82-%D1%82%D0%B5%D0%BC%D0%BF%D1%83%D1%80%D0%B0_23247.jpg?alt=media&token=a935849f-5cde-4cab-a86c-c9939a64e323&w=1920&h=1080&format=webp&mode=fit&q=60',
    //         weight: 160,
    //         quantity: 8,
    //         calories: 130,
    //         ingredients: 'Лосось, рис, соус спайси, соус унаги, кляр (мука, вода), сухари панко, водоросли нори',
    //         price: 269,
    //         oldPrice: null,
    //         orders: 180,
    //         dateAdded: new Date('2022-09-05T16:45:30'),
    //         characteristics: [chars.SPICY, chars.BAKED]
    //     },
    //     {
    //         name: 'Ролл "Калифорния каппа маки в кунжуте"',
    //         image: 'https://x100-venus-sm-ru.gumlet.io/SKU/SUSHI-MASTER/%D0%A0%D0%BE%D0%BB%D0%BB%D1%8B/8E1D0391-FB59-11EC-A686-93C9D3D494AC-%D0%BA%D0%B0%D0%BB%D0%B8%D1%84%D0%BE%D1%80%D0%BD%D0%B8%D1%8F-%D0%BA%D0%B0%D0%BF%D0%BF%D0%B0-%D0%BC%D0%B0%D0%BA%D0%B8-%D0%B2-%D0%BA%D1%83%D0%BD%D0%B6%D1%83%D1%82%D0%B5.jpg?alt=media&token=89ca6947-09f0-4736-b39a-8c74b5e8dd25&w=1920&h=1080&format=webp&mode=fit&q=60',
    //         weight: 185,
    //         quantity: 8,
    //         calories: 130,
    //         ingredients: 'Краб-микс, рис, свежий огурец, кунжут, водоросли нори',
    //         price: 229,
    //         oldPrice: null,
    //         orders: 150,
    //         dateAdded: new Date('2022-09-05T16:45:30'),
    //         characteristics: null
    //     },
    // ]

    const [items, setItems] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)

    React.useEffect(() => {
        fetch('https://64db1b63593f57e435b07477.mockapi.io/items')
        .then(res => res.json())
        .then(arr => {
            setItems(arr)
            setIsLoading(false)
        })
    }, [])

    const today = new Date()

    const elements =
        isLoading
            ? [...new Array(9)].map((_, index) => <Skeleton key={index}/>)
            : items.map(item => <Item item={item} id={item.id} today={today} key={item.id}/>)

    return (
        <div className={styles.foodList}>
            {/*TODO: side decorations*/}
            <ul className={styles.wrapper}>
                {elements}
            </ul>
        </div>
    )
}
