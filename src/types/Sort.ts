export enum SortPropertyEnum {
  DEFAULT = '',
  ORDERS_DESC = 'orders',
  ORDERS_ASC = '-orders',
  RATING_DESC = 'rating',
  RATING_ASC = '-rating',
  TITLE_DESC = 'title',
  TITLE_ASC = '-title',
  PRICE_DESC = 'price',
  PRICE_ASC = '-price',
}

export type Sort = {
  name: string,
  sortBy: SortPropertyEnum,
}
