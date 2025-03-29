const puppeteer = require('puppeteer')
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ['--window-size=1280,720'],
  })

  const page = await browser.newPage()

  await page.goto('https://irkutsk.sushi-master.ru/menu/rolly')

  await page.evaluate(scrollToBottom)

  const cards = await page.$$('#main > main > div > div.container.category-page > div.infinite-scroll-component__outerdiv > div > div > div', card => card)

  let dataArray = []

  let id = 0
  for (const card of cards) {
    dataArray.push(await generateObject(card, id))
    id++
  }

  console.log(dataArray.length)

  const json = JSON.stringify(dataArray)

  fs.writeFile('data.json', json, 'utf8', function (err) {
    if (err) throw err
    console.log('complete')
  })

  await browser.close()
})()

async function generateObject(card, id) {
  const image = await card.$eval('div.next-image-wrapper img', el => el.getAttribute('src'))
  const name = await card.$eval('.title.pointer', el => el.textContent)
  const ingredients = (await card.$eval('.description', el => el.textContent)).split(',').map(item => item.trim())
  const price = parseInt((await card.$eval('.current-price', el => el.textContent)).replace(/\D/g, ''))

  const characteristics = await card.$$eval('div.product-labels > div > div > span', labels =>
    labels.map(label =>
      new Map([
        ['Темпура', 'baked'],
        ['Запеченный', 'baked'],
        ['Опаленные', 'baked'],
        ['Среднеострое', 'spicy'],
        ['Немного острое', 'spicy'],
        ['Острые', 'spicy'],
        ['Veg', 'vegan'],
        ['Суши', 'sushi'],
        ['Фитнес', 'fitness'],
        ['ХИТ', 'hit'],
      ]).get(label.textContent),
    ),
  ) || null

  const weightAndQuantity = (await card.$eval('strong.under-title.flex.align-center.justify-between.full-width > span', el => el.textContent)).split('  ')
  const weight = parseInt(weightAndQuantity[0].replace(/\D/g, ''))
  const quantity = parseInt(weightAndQuantity[1] ? weightAndQuantity[1].replace(/\D/g, '') : 1)

  const roundedPercent = Math.ceil(Math.random() * 50 / 5) * 5

  let categories = []

  const tmp = (name + image + characteristics).toLowerCase()

  if (tmp.includes('ролл') || tmp.includes('roll')) {
    categories.push('rolls')
  }

  if (tmp.includes('суши') || tmp.includes('sushi')) {
    categories.push('sushi')
  }

  const ratingMin = 1
  const ratingMax = 10

  return {
    id,
    name,
    categories,
    image,
    weight,
    quantity,
    calorieContent: Math.floor(1.3 * weight),
    ingredients,
    price,
    oldPrice: Math.random() < .45 ? Math.round(price + (price / (100 - roundedPercent)) * roundedPercent) : null,
    orders: Math.floor(Math.random() * (1000 - 100 + 1) + 100),
    rating: parseInt((Math.random() * (ratingMax - ratingMin) + ratingMin).toFixed(1)),
    dateAdded: getRandomDate(new Date(2022, 5, 1), new Date()),
    characteristics,
  }
}

function getRandomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
}

async function scrollToBottom() {
  await new Promise(resolve => {
    const distance = 100 // should be less than or equal to window.innerHeight
    const delay = 10
    const timer = setInterval(() => {
      document.scrollingElement.scrollBy(0, distance)
      if (document.scrollingElement.scrollTop + window.innerHeight >= document.scrollingElement.scrollHeight) {
        clearInterval(timer)
        resolve()
      }
    }, delay)
  })
}
