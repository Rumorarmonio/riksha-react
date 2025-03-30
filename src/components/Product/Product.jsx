import {useNavigate, useParams} from 'react-router-dom'
import axios from 'axios'
import {useEffect, useState} from 'react'

export default function Product() {
  const [product, setProduct] = useState()
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchProduct(id) {
      try {
        const { data } = await axios.get(`https://64db1b63593f57e435b07477.mockapi.io/items/${id}`)
        setProduct(data)
        console.log(data)
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
      <h1>{id}</h1>
      <h1>{JSON.stringify(product)}</h1>
    </div>
  )
}
