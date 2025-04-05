import React, { JSX, useState } from 'react'
import styles from './Tags.module.scss'
import { attributeTags, ingredientTags } from '../../../../assets/data/data'
import { setCategoryId } from '../../../../redux/slices/filterSlice'
import { Tag } from '../../../../types/Tag'
import clsx from 'clsx'
import { useAppDispatch } from '../../../../redux/store'

export function Tags(): JSX.Element {
  const [ingredientState, setIngredientState] = useState<Tag[]>(ingredientTags)
  const [attributeState, setAttributeState] = useState<Tag[]>(attributeTags)
  const dispatch = useAppDispatch()

  // TODO: save tags to redux
  function createTags(state: Tag[], setState: (state: Tag[]) => void): JSX.Element[] {
    return state.map(({ id, name, icon, selected }: Tag): JSX.Element =>
      (
        <li
          className={clsx(styles.tag, selected && styles.active)}
          onClick={
            (): void => {
              dispatch(setCategoryId(id))
              setState(state.map((item: Tag): Tag => {
                    if (item.id === id) {
                      return {
                        id,
                        name,
                        icon,
                        selected: !selected,
                      }
                    }

                    return item
                  },
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

  const ingredients: JSX.Element[] = createTags(ingredientState, setIngredientState)
  const attributes: JSX.Element[] = createTags(attributeState, setAttributeState)

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
        {[...ingredients]}
      </ul>
      <span className={styles.label}>
        Характеристики
      </span>
      <ul className={styles.list}>
        {[...attributes]}
      </ul>
    </div>
  )
}
