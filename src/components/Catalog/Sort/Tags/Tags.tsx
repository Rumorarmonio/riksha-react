import React, { JSX, useState } from 'react'

import styles from './Tags.module.scss'
import { attributes, ingredients } from '../../../../assets/data/arrays'
import { useDispatch } from 'react-redux'
import { setCategoryId } from '../../../../redux/slices/filterSlice'

export function Tags(): JSX.Element {
  const [ingredientState, setIngredientState] = useState(ingredients)
  const [attributeState, setAttributeState] = useState(attributes)
  const dispatch = useDispatch()

  // TODO: save tags to redux
  function createElements(state: any, setState: (state: any) => void): any {
    return state.map(({ id, name, icon, selected }: any): JSX.Element =>
      (
        <li
          className={`${styles.tag} ${selected ? styles.active : ''}`}
          onClick={
            () => {
              dispatch(setCategoryId(id))
              setState(state.map((item: any): any =>
                  item.id === id ? { id, name, icon, selected: !selected } : item,
                ),
              )
              // console.log('tag ', categoryId)
            }
          }
          key={id}
        >
          <img
            className={styles.icon}
            src={icon}
            alt={`${name}.svg`}
          />
          <span className={styles.name}>
            {name}
          </span>
        </li>
      ),
    )
  }

  return (
    <div className={styles.tags}>
      {/*TODO: breadcrumbs component*/}
      <span className={styles.breadcrumbs}>
        Главная&nbsp;&nbsp;//&nbsp;&nbsp;<b>Суши</b>
      </span>
      <h2 className={styles.title}>
        Суши
      </h2>
      <span className={styles.label}>
        Ингредиенты
      </span>
      <ul className={styles.list}>
        {createElements(ingredientState, setIngredientState)}
      </ul>
      <span className={styles.label}>
        Характеристики
      </span>
      <ul className={styles.list}>
        {createElements(attributeState, setAttributeState)}
      </ul>
    </div>
  )
}
