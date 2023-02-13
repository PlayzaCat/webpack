let logoBlock = document.querySelector(".logo-block")
let show = document.querySelector('.readmore__open_logo-block');
let hide = document.querySelector('.readmore__close_logo-block');

hide.addEventListener("click", () => {
  logoBlock.style.height = '180px';
})

show.addEventListener("click", () => {
  logoBlock.style.height = 'auto';
})


const readmoreLogoBlock = document.querySelector('.readmore_logo-block');
const open = document.querySelector('.readmore__open_logo-block');
const close = document.querySelector('.readmore__close_logo-block');

close.addEventListener('click', () => {
  readmoreLogoBlock.classList.remove('readmore__open_logo-block');
  });


open.addEventListener('click', () => {
  readmoreLogoBlock.classList.add('readmore__open_logo-block');
});


window.addEventListener('resize', mainPageWidthControl);
window.addEventListener('resize', mainPageWidthControl2);

const repairBlock = document.querySelector('.repair-block')
const hideRepairBlock = document.querySelector('.hide_repair-block')
const grid = document.querySelector('.grid_container')

function mainPageWidthControl() {
  if (innerWidth <= '768') {
    logoBlock.style.display = 'none';
    readmoreLogoBlock.style.display = 'none';
    repairBlock.style.display = 'none';
    grid.style.display = 'none';

  } else if (innerWidth > '768') {
    logoBlock.style.display = 'flex';
    readmoreLogoBlock.style.display = 'flex';
    repairBlock.style.display = 'flex';
    grid.style.display = 'inline-grid';
  }
}

// Прячем 4 элемент второго слайдера

function mainPageWidthControl2() {
  if (innerWidth <= '980') {
    hideRepairBlock.style.display = 'none'; }
  else if (innerWidth > '981') {
    hideRepairBlock.style.display = 'flex'; }

}    

// 