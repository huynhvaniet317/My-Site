// -------------- Vanilla JavaScript --------------
const menuList = document.getElementById('menu');
const menuButton = document.getElementById('hambuger');

const modalPrevBtn = document.querySelector('.icon-prev');
const modalNextBtn = document.querySelector('.icon-next');
const thumbArray = document.querySelectorAll('.thumb-item');
const mainImg = document.querySelector('.main-img img');

let currentItem = document.querySelector('.active');

menuButton.addEventListener('click', onMenuClick);
modalNextBtn.addEventListener('click', onModalNextClick);
modalPrevBtn.addEventListener('click', onModalPrevClick);

let count = 0;
const length = thumbArray.length;

function onModalNextClick(){
  
  currentItem.classList.remove('active');
  count++;

  if(count === length) {
    count = 0;
    currentItem = thumbArray[0];
    currentItem.classList.add('active');
    mainImg.setAttribute('src', currentItem.firstChild.getAttribute('src'));
    return false;
  }

  currentItem = thumbArray[count];
  currentItem.classList.add('active');
  const currentUrlImg = currentItem.firstChild.getAttribute('src');
  mainImg.setAttribute('src', currentUrlImg);

}

function onModalPrevClick(){

  currentItem.classList.remove('active');
  count--;

  if(count >= 0){
    currentItem = thumbArray[count];
    currentItem.classList.add('active');
  }

  if(count === -1) {
     count = length - 1;
     currentItem = thumbArray[length - 1];
     currentItem.classList.add('active');
     mainImg.setAttribute('src', currentItem.firstChild.getAttribute('src'));
     return false;
  }
  const currentUrlImg = currentItem.firstChild.getAttribute('src');
  mainImg.setAttribute('src', currentUrlImg);

}


function onMenuClick(e) {
  const hiddenMenu = menuList.style.opacity;
  if (hiddenMenu === '1') {
    menuList.style.opacity = '0'
    return false;
  }
  menuList.style.opacity = '1';
}


// -------------- Vanilla JavaScript --------------
// ------------jQuery-------------
$(() => {$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  autoplay: true,
  autoplayTimeout: 5000,
  navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
  items: 1
});

$('.container-seller .item').click(() => {
  $('.modal').css('display', 'block');
  document.body.style.overflow = 'hidden';
});

$('.wrap-modal').click(() => {
  $('.modal').css('display', 'none');
  document.body.style.overflow = 'auto';
});})




