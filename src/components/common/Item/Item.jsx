import styles from './Item.module.scss';
import {Button} from '../Button/Button';
import {useDispatch, useSelector} from 'react-redux';
import React from 'react';
import {addItem, selectCartItemById} from '../../../redux/slices/cartSlice';
import {Link} from 'react-router-dom';

export function Item({ product, id, today }) {
  const dispatch = useDispatch();
  const cartItem = useSelector(selectCartItemById(id));

  const addedCount = cartItem ? cartItem.count : 0;

  function onClickAdd(item) {
    dispatch(addItem({ ...item }));
  }

  const characteristics = ['spicy', 'baked', 'vegan'];
  let leftColumn = null;
  if (product.characteristics) {
    leftColumn =
      (
        <ul className={styles.left}>
          {
            product.characteristics.map((name, index) => {
                if (characteristics.includes(name)) {
                  return (
                    <li key={index}>
                      <img
                        className={styles.image}
                        src={require(`../../../assets/images/svg/attributes/${name}.svg`)}
                        alt={`${name}.svg`}
                      />
                      <span className={styles.label}>{name}</span>
                    </li>
                  );
                } else {
                  return null;
                }
              },
            )
          }
        </ul>
      );
  }

  // TODO: optimize
  // three months
  const timeCheck = today - Date.parse(product.dateAdded) < 1000/*ms*/ * 60/*s*/ * 60/*min*/ * 24/*h*/ * 30/*days*/ * 3;/*months*/
  const ordersCheck = product.orders >= 800;
  const saleCheck = product.oldPrice !== null;
  let rightColumn = null;
  if (timeCheck || ordersCheck || saleCheck) {
    rightColumn =
      (
        <ul className={styles.right}>
          {
            ordersCheck &&
            <li key={id}>
              <img
                className={styles.image} src={require('../../../assets/images/svg/attributes/top.svg').default}
                alt="top.svg"
              />
            </li>
          }

          {
            timeCheck &&
            <li key={id + 1}>
              <img
                className={styles.image} src={require('../../../assets/images/svg/attributes/new.svg').default}
                alt="new.svg"
              />
            </li>
          }

          {
            saleCheck &&
            <li key={id + 2}>
              <img
                className={styles.image} src={require('../../../assets/images/svg/attributes/discount.svg').default}
                alt="discount.svg"
              />
            </li>
          }
        </ul>
      );
  }

  return (
    <li className={styles.item} key={id}>
      {leftColumn}
      <img
        className={styles.image}
        src={product.image}
        alt={product.name}
      />
      {rightColumn}
      <div className={styles.container}>
        <div className={styles.upper}>
          <div className={styles.details}>
            <span className={styles.detail}>
              {product.weight} г
            </span>
            <i className={styles.dot}>&#8226;</i>
            <span className={styles.detail}>
              {product.calorieContent} Ккал
            </span>
          </div>
          <Link
            to={`/product/${product.id}`}
            className={styles.name}
          >
            {product.name}
          </Link>
          <span className={styles.ingredients}>
            {product.ingredients.join(', ')}
          </span>
        </div>

        <div className={styles.bottom}>
          <div className={styles.price}>
            <span className={styles.old}>
              {product.oldPrice && product.oldPrice + '\u20BD'}&#160;
            </span>
            <span className={styles.new}>
              {product.price} &#8381;
            </span>
          </div>
          {/*TODO: fix adding multiple items*/}
          <Button
            link="/details"
            style={{
              marginTop: '7px',
              padding: '13px 60px',
            }}
            onClick={() => onClickAdd(product)}
          >
            {`Добавить ${addedCount ? `(${addedCount})` : ''}`}
          </Button>
        </div>
      </div>
    </li>
  );
}
