// TODO: можно использовать TProduct, чтобы не было конфликтов с именем компонента
// TODO: разные типы для продукта и для продукта в корзине
export type Product = {
  id: string,
  name: string,
  categories: string[],
  image: string,
  weight: number,
  quantity: number,
  calorieContent: number,
  ingredients: string[],
  price: number,
  oldPrice: number,
  orders: number,
  rating: number,
  dateAdded: string,
  characteristics: string[],
  added: number,
}
