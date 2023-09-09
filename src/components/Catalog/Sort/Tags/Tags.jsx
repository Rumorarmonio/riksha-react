import React from 'react'

import styles from './Tags.module.scss'

// TODO: move to menus.js
export default function Tags() {
    const ingredients = [
        {
            id: 0,
            name: 'Лосось',
            icon: require('../../../../assets/images/png/ingredients/salmon.png'),
            selected: false
        },
        {
            id: 1,
            name: 'Тунец',
            icon: require('../../../../assets/images/png/ingredients/tuna.png'),
            selected: false
        },
        {
            id: 2,
            name: 'Угорь',
            icon: require('../../../../assets/images/png/ingredients/eel.png'),
            selected: false
        },
        {
            id: 3,
            name: 'Креветка',
            icon: require('../../../../assets/images/png/ingredients/shrimp.png'),
            selected: false
        },
        {
            id: 4,
            name: 'Краб',
            icon: require('../../../../assets/images/png/ingredients/crab.png'),
            selected: false
        },
        {
            id: 5,
            name: 'Мидии',
            icon: require('../../../../assets/images/png/ingredients/mussels.png'),
            selected: false
        }
    ]

    const attributes = [
        {
            id: 0,
            name: 'Острое',
            icon: require('../../../../assets/images/svg/attributes/spicy.svg').default,
            selected: false
        },
        {
            id: 1,
            name: 'Запеченный ролл',
            icon: require('../../../../assets/images/svg/attributes/baked.svg').default,
            selected: false
        },
        {
            id: 2,
            name: 'Vegan',
            icon: require('../../../../assets/images/svg/attributes/vegan.svg').default,
            selected: false
        },
        {
            id: 3,
            name: 'ТОП-позиции',
            icon: require('../../../../assets/images/svg/attributes/top.svg').default,
            selected: false
        },
        {
            id: 4,
            name: 'Новинки',
            icon: require('../../../../assets/images/svg/attributes/new.svg').default,
            selected: false
        },
        {
            id: 5,
            name: 'Скидки',
            icon: require('../../../../assets/images/svg/attributes/discount.svg').default,
            selected: false
        },
    ]

    const [ingredientState, setIngredientState] = React.useState(ingredients)
    const [attributeState, setAttributeState] = React.useState(attributes)

    function createElements(state, setState) {
        return state.map(({id, name, icon, selected}) =>
            (
                <li className={`${styles.tag} ${selected && styles.active}`}
                    onClick={() =>
                        setState(
                            state.map(item =>
                                (item.id === id ? {id, name, icon, selected: !selected} : item)
                            )
                        )
                    }
                    key={id}>
                    <img className={styles.icon} src={icon} alt={name}/>
                    <span className={styles.name}>{name}</span>
                </li>
            )
        )
    }

    return (
        <div className={styles.tags}>
            <span className={styles.breadcrumbs}>Главная&nbsp;&nbsp;//&nbsp;&nbsp;<b>Суши</b></span>
            <h2 className={styles.title}>Суши</h2>
            <ul className={styles.list}>
                {createElements(ingredientState, setIngredientState)}
            </ul>
            <ul className={styles.list}>
                {createElements(attributeState, setAttributeState)}
            </ul>
        </div>
    )
}
