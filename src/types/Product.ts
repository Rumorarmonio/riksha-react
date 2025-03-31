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
  // TODO: rename to added
  count: number,
}
