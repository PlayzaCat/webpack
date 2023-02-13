
// Менюшка feedback

const feedbackMenu = document.querySelector('.request_feedback_menu')  // выплывающее меню по кнопке обратной связи
const feedbackMenuOpen = document.querySelector('.container_feedback_menu__open') // кнопка обратной связи из хедер
const feedbackMenuClose  = document.querySelector('.container_feedback_menu__close') // кнопка закрытие обратной связи
const feedbackMenuOpenTwo  = document.querySelector('.container_feedback_menu__open_two') // кнопка обратной связи из меню


const callMenu = document.querySelector('.call_menu')  // заказать звонок
const callMenuOpen = document.querySelector('.container_call_menu__open') // кнопка заказать звонок из хедер
const callMenuClose  = document.querySelector('.container_call_menu__close') // кнопка закрытие заказать звонок
const callMenuOpenTwo  = document.querySelector('.container_call_menu__open_two') // дубль по кнопке заказать звонок


const shadowBorder = "0px -5px 10px 0px rgba(0, 0, 0, 0.5)"

const blur = document.querySelector('.blur'); // слой замутнения фона

window.addEventListener('resize', menuWidthControl);


  function menuWidthControl() {
    if (innerWidth <= '320') {
      feedbackMenu.style.width = '320px';
      callMenu.style.width = '320px';
    } else if (innerWidth <= '1440') {
      feedbackMenu.style.width = '320px';
      callMenu.style.width = '320px';
      callMenuClose.style.position = 'relative';
      callMenuClose.style.transform = 'translateX(0px)';
      feedbackMenuClose.style.position = 'relative';
      feedbackMenuClose.style.transform = 'translateX(0px)';
    } else if (innerWidth >= '1440') {
      feedbackMenu.style.width = '440px';
      callMenu.style.width = '440px';
      callMenuClose.style.position = 'absolute';
      callMenuClose.style.transform = 'translateX(-90px)';
      feedbackMenuClose.style.position = 'absolute';
      feedbackMenuClose.style.transform = 'translateX(-90px)';
    }else {

    }
}






// Менюшка feedback


feedbackMenuClose.addEventListener("click", () => {
  feedbackMenu.style.transform = "translateX(100%)";
    blur.style.display =  'none';
    feedbackMenu.style.boxShadow = 'none';
    feedbackMenuClose.style.display = 'none';
})

feedbackMenuOpen.addEventListener("click", () => {
  feedbackMenu.style.transform = "translateX(0%)"
    blur.style.display =  'block';
    feedbackMenu.style.boxShadow = shadowBorder;
    feedbackMenuClose.style.display = 'block';
})

feedbackMenuOpenTwo.addEventListener("click", () => {
  feedbackMenu.style.transform = "translateX(0%)"
    blur.style.display =  'block';
    feedbackMenu.style.boxShadow = shadowBorder;
    feedbackMenuClose.style.display = 'block';
})


// Менюшка Call


callMenuClose.addEventListener("click", () => {
  callMenu.style.transform = "translateX(100%)";
    blur.style.display =  'none';
    callMenu.style.boxShadow = 'none';
    callMenuClose.style.display = 'none';
})

callMenuOpen.addEventListener("click", () => {
  callMenu.style.transform = "translateX(0%)"
    blur.style.display =  'block';
    callMenu.style.boxShadow = shadowBorder;
    callMenuClose.style.display =  'block';
})

callMenuOpenTwo.addEventListener("click", () => {
  callMenu.style.transform = "translateX(0%)"
    blur.style.display =  'block';
    callMenu.style.boxShadow = shadowBorder;
    callMenuClose.style.display =  'block';
})
