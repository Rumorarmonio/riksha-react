import { Tag } from '../../types/Tag'
import { ImageLink } from '../../types/ImageLink'
import { NavigationItem } from '../../types/NavigationItem'
import { Sort, SortPropertyEnum } from '../../types/Sort'

export const navigationItems: NavigationItem[] = [
  {
    name: 'О нас',
    url: '/NotFound',
  },
  {
    name: 'Доставка и оплата',
    url: '/NotFound',
  },
  {
    name: 'Контакты',
    url: '/NotFound',
  },
  {
    name: 'Бонусы',
    url: '/NotFound',
  },
  {
    name: 'Вакансии',
    url: '/NotFound',
  },
]

export const categories: ImageLink[] = [
  {
    name: 'Пицца',
    icon: require('../images/svg/categories/pizza.svg').default,
    url: '/',
  },
  {
    name: 'Суши',
    icon: require('../images/svg/categories/sushi.svg').default,
    url: '/',
  },
  {
    name: 'Роллы',
    icon: require('../images/svg/categories/rolls.svg').default,
    url: '/',
  },
  {
    name: 'Сеты',
    icon: require('../images/svg/categories/sets.svg').default,
    url: '/',
  },
  {
    name: 'Воки',
    icon: require('../images/svg/categories/wok.svg').default,
    url: '/',
  },
  {
    name: 'Супы',
    icon: require('../images/svg/categories/soups.svg').default,
    url: '/',
  },
  {
    name: 'Салаты',
    icon: require('../images/svg/categories/salads.svg').default,
    url: '/',
  },
  {
    name: 'Десерты',
    icon: require('../images/svg/categories/dessert.svg').default,
    url: '/',
  },
  {
    name: 'Напитки',
    icon: require('../images/svg/categories/beverages.svg').default,
    url: '/',
  },
  {
    name: 'Акции',
    icon: require('../images/svg/categories/promotions.svg').default,
    url: '/',
  },
]

export const socials: ImageLink[] = [
  {
    name: 'facebook',
    icon: require('../images/svg/socials/facebook.svg').default,
    url: 'https://www.facebook.com/',
  },
  {
    name: 'instagram',
    icon: require('../images/svg/socials/instagram.svg').default,
    url: 'https://www.instagram.com/',
  },
  {
    name: 'vk',
    icon: require('../images/svg/socials/vk.svg').default,
    url: 'https://vk.com/',
  },
]

export const sortTypes: Sort[] = [
  {
    name: 'По умолчанию',
    sortBy: SortPropertyEnum.DEFAULT,
  },
  {
    name: 'По популярности (DESC)',
    sortBy: SortPropertyEnum.ORDERS_DESC,
  },
  {
    name: 'По популярности (ASC)',
    sortBy: SortPropertyEnum.ORDERS_ASC,
  },
  {
    name: 'По рейтингу (DESC)',
    sortBy: SortPropertyEnum.RATING_DESC,
  },
  {
    name: 'По рейтингу (ASC)',
    sortBy: SortPropertyEnum.RATING_ASC,
  },
  {
    name: 'По цене (DESC)',
    sortBy: SortPropertyEnum.PRICE_DESC,
  },
  {
    name: 'По цене (ASC)',
    sortBy: SortPropertyEnum.PRICE_ASC,
  },
  {
    name: 'По алфавиту (DESC)',
    sortBy: SortPropertyEnum.TITLE_DESC,
  },
  {
    name: 'По алфавиту (ASC)',
    sortBy: SortPropertyEnum.TITLE_ASC,
  },
]

export const ingredientTags: Tag[] = [
  {
    id: 0,
    name: 'Лосось',
    icon: require('../images/png/ingredients/salmon.png'),
    selected: false,
  },
  {
    id: 1,
    name: 'Тунец',
    icon: require('../images/png/ingredients/tuna.png'),
    selected: false,
  },
  {
    id: 2,
    name: 'Угорь',
    icon: require('../images/png/ingredients/eel.png'),
    selected: false,
  },
  {
    id: 3,
    name: 'Креветка',
    icon: require('../images/png/ingredients/shrimp.png'),
    selected: false,
  },
  {
    id: 4,
    name: 'Краб',
    icon: require('../images/png/ingredients/crab.png'),
    selected: false,
  },
  {
    id: 5,
    name: 'Мидии',
    icon: require('../images/png/ingredients/mussels.png'),
    selected: false,
  },
]

export const attributeTags: Tag[] = [
  {
    id: 0,
    name: 'Острое',
    icon: require('../images/svg/attributes/spicy.svg').default,
    selected: false,
  },
  {
    id: 1,
    name: 'Запеченный ролл',
    icon: require('../images/svg/attributes/baked.svg').default,
    selected: false,
  },
  {
    id: 2,
    name: 'Vegan',
    icon: require('../images/svg/attributes/vegan.svg').default,
    selected: false,
  },
  {
    id: 3,
    name: 'ТОП-позиции',
    icon: require('../images/svg/attributes/top.svg').default,
    selected: false,
  },
  {
    id: 4,
    name: 'Новинки',
    icon: require('../images/svg/attributes/new.svg').default,
    selected: false,
  },
  {
    id: 5,
    name: 'Скидки',
    icon: require('../images/svg/attributes/discount.svg').default,
    selected: false,
  },
]

export const chars = {
  SPICY: 'spicy',
  BAKED: 'baked',
  VEGAN: 'vegan',
}

export const categoryEnum = {
  PIZZA: 'pizza',
  SUSHI: 'sushi',
  ROLLS: 'rolls',
  SETS: 'sets',
  WOK: 'wok',
  SOUPS: 'soups',
  SALADS: 'salads',
  DESSERTS: 'desserts',
  BEVERAGES: 'beverages',
  DISCOUNTS: 'discounts',
}
