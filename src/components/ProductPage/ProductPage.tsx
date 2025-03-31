import {NavigateFunction, useNavigate, useParams} from 'react-router-dom'
import axios from 'axios'
import {ReactElement, useEffect, useState} from 'react'
import {Product} from '../../types/Product'

export function ProductPage(): ReactElement {
  const [product, setProduct] = useState<Product>()
  const {id} = useParams() as { id: string }
  const navigate: NavigateFunction = useNavigate()

  useEffect((): void => {
    async function fetchProduct(id: string): Promise<void> {
      try {
        const {data} = await axios.get(`https://64db1b63593f57e435b07477.mockapi.io/items/${id}`)
        setProduct(data)
      } catch (error) {
        alert('Не нашёлся продукт!')
        navigate('/')
      }
    }

    fetchProduct(id)
  }, [id])

  if (!product) {
    return (
      <div className="container">
        Загрузка...
      </div>
    )
  }

  return (
    <div className="container">
      <p>{id}</p>
      <h1>{product.name}</h1>
      <p>{product.categories.toString()}</p>
      <p>{product.image}</p>
      <p>{product.weight}</p>
      <p>{product.quantity}</p>
      <p>{product.calorieContent}</p>
      <p>{product.ingredients.toString()}</p>
      <p>{product.price}</p>
      <p>{product.oldPrice}</p>
      <p>{product.name}</p>
      <p>{product.orders}</p>
      <p>{product.rating}</p>
      <p>{product.dateAdded}</p>
      <p>{product.characteristics.toString()}</p>
      <p>{JSON.stringify(product)}</p>
    </div>
  )
}
