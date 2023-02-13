import '../scss/style.scss'

import './swiper.js'
import './logoblock.js'
import './callmenu.js'

console.log('Works!')

// Header Scripts

const headerMobileBlock = document.querySelector('.mobile_block') // call, chat и вызов для экранов выше 768
const dividerMobileBlock = document.querySelector('.divider1') // палочка в менюшке мобильной версии
const headerOff = document.querySelector('.header__inner') // менюшка мобильной версии, вся плашка

const burger_menu = document.querySelector('.header_menu') // выплывающее меню по кнопке мобильной версии
const hideMenuButton = document.querySelector('.menu') // кнопка выплывающего меню
let show = document.querySelector('.menu__open') // кнопка выплывающего меню
let hide = document.querySelector('.menu__close') // кнопка выплывающего меню

const blur = document.querySelector('.blur') // слой замутнения фона
const mainPage = document.querySelector('.main_page') // основная часть страницы, отступ для левого меню.
const mainPageHiddenGroup = document.querySelector('.hide_button_group') // кнопки заявки и ремонта для 1440
const mainPageTextBlock = document.querySelector('.main_page_text_block') // верхний блок с текстом и картинкой, смена порядка блоков

const footer = document.querySelector('.footer')

var shadowBorder = '0px -5px 10px 0px rgba(0, 0, 0, 0.5)' // стиль для тенюшки меню слева

window.addEventListener('resize', burgerMenuWidthControl)
window.addEventListener('resize', windowWidthControl)

function windowWidthControl() {
  if (innerWidth < '768') {
    headerMobileBlock.style.display = 'none'
    dividerMobileBlock.style.display = 'none'
  } else if (innerWidth < '1440') {
    headerOff.style.display = 'flex'
    headerMobileBlock.style.display = 'flex'
    dividerMobileBlock.style.display = 'flex'
    mainPage.style.marginLeft = '0px'
    hideMenuButton.style.display = 'flex'
    mainPageHiddenGroup.style.display = 'none'
    burger_menu.style.transform = 'translateX(-100%)'
  } else if (innerWidth >= '1440') {
    headerOff.style.display = 'none'
    mainPage.style.marginLeft = '306px'
    burger_menu.style.transform = 'translateX(0%)'
    blur.style.display = 'none'
    hideMenuButton.style.display = 'none'
    mainPageHiddenGroup.style.display = 'flex'
  } else {
}
}

windowWidthControl()

console.log(innerWidth)

function burgerMenuWidthControl() {
  if (innerWidth <= '320') {
    burger_menu.style.width = '320px'
  } else if (innerWidth <= '360') {
    burger_menu.style.width = '360px'
  } else if (innerWidth < '1440') {
    burger_menu.style.width = '320px'
  } else if (innerWidth >= '1440') {
    burger_menu.style.width = '306px'
  } else {
  }
}

// Body Scripts

// const ipadVisibleItems = []
// const ipadHiddenItems = []

// const desktopVisibleItems = []
// const desktopHiddenItems = []

// Menu script

hide.addEventListener('click', () => {
  burger_menu.style.transform = 'translateX(-100%)'
  blur.style.display = 'none'
  burger_menu.style.boxShadow = 'none'
})

show.addEventListener('click', () => {
  burger_menu.style.transform = 'translateX(0%)'
  blur.style.display = 'block'
  burger_menu.style.boxShadow = shadowBorder
})

// Readmore block
let content = document.querySelector('.main_page_text_group')
let mainPageReadmoreShow = document.querySelector('.main_page_readmore__open')
let mainPageReadmoreHide = document.querySelector('.main_page_readmore__close')

mainPageReadmoreHide.addEventListener('click', () => {
  content.style.height = '88px'
})

mainPageReadmoreShow.addEventListener('click', () => {
  content.style.height = '100%'
})

const mainPageReadmore = document.querySelector('.main_page_readmore')
const mainPageReadmoreOpen = document.querySelector('.main_page_readmore__open')
const mainPageReadmoreClose = document.querySelector(
  '.main_page_readmore__close'
)

mainPageReadmoreClose.addEventListener('click', () => {
  mainPageReadmore.classList.remove('main_page_readmore__open')
})

mainPageReadmoreOpen.addEventListener('click', () => {
  mainPageReadmore.classList.add('main_page_readmore__open')
})

// SWIPER BLOCK

window.addEventListener('resize', mainPageWidthControl)

const swiperOne = document.querySelector('.mySwiperOne') // первый свайпер
const swiperTwo = document.querySelector('.mySwiperTwo') // второй свайпер
const swiperThree = document.querySelector('.mySwiperThree') // третий свайпер

// слайдеры и футер от ширины страницы
function mainPageWidthControl() {
  if (innerWidth <= '768') {
    mainPageTextBlock.style.flexDirection = 'column'
    swiperOne.style.display = 'flex'
    swiperTwo.style.display = 'flex'
    swiperThree.style.display = 'flex'
    // footer
    footer.style.flexDirection = 'column'
    footer.style.justifyContent = 'center'
  } else if (innerWidth > '768') {
    mainPageTextBlock.style.flexDirection = 'row'
    swiperOne.style.display = 'none'
    swiperTwo.style.display = 'none'
    swiperThree.style.display = 'none'
    // footer
    footer.style.flexDirection = 'row'
    footer.style.justifyContent = 'space-between'
  }
}
