import React from 'react'

import styles from './Tags.module.scss'
import {attributes, ingredients} from '../../../../assets/data/arrays'
import {FilterContext} from '../../Catalog'

export default function Tags() {
    const {categoryId, onChangeCategory} = React.useContext(FilterContext)

    const [ingredientState, setIngredientState] = React.useState(ingredients)
    const [attributeState, setAttributeState] = React.useState(attributes)

    // TODO: save tags to redux
    function createElements(state, setState) {
        return state.map(({id, name, icon, selected}) =>
            (
                <li className={`${styles.tag} ${selected && styles.active}`}
                    onClick={() => {
                        onChangeCategory(id)
                        setState(state.map(item => item.id === id ? {id, name, icon, selected: !selected} : item))
                        console.log('tag ', categoryId)
                    }
                    }
                    key={id}>
                    <img className={styles.icon} src={icon} alt={`${name}.svg`}/>
                    <span className={styles.name}>{name}</span>
                </li>
            )
        )
    }

    return (
        <div className={styles.tags}>
            <span className={styles.breadcrumbs}>Главная&nbsp;&nbsp;//&nbsp;&nbsp;<b>Суши</b></span>
            <h2 className={styles.title}>Суши</h2>
            <span className={styles.label}>Ингредиенты</span>
            <ul className={styles.list}>
                {createElements(ingredientState, setIngredientState)}
            </ul>
            <span className={styles.label}>Характеристики</span>
            <ul className={styles.list}>
                {createElements(attributeState, setAttributeState)}
            </ul>
        </div>
    )
}
