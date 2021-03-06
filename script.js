const MENU = document.getElementById('menu');
const BUTTON = document.getElementById('button');
const CLOSE_BUTTON = document.getElementById('close-button');
const TAGS = document.getElementById('tags');
const VERTICAL_PHONE_BUTTON = document.querySelector('.vertical-phone-btn');
const HORIZONTAL_PHONE_BUTTON = document.querySelector('.horizontal-phone-btn');
const PREV_BUTTON = document.getElementById('prev-button');
const NEXT_BUTTON = document.getElementById('next-button');
const ALL = document.getElementById('all');
const WEB_DESIGN = document.getElementById('web-design');
const GRAPHIC_DESIGN = document.getElementById('graphic-design');
const ARTWORK = document.getElementById('artwork');
const PORTFOLIO = document.getElementById('portfolio-gallery');
const BURGER_MENU = document.getElementById('header__burger');
let items = document.querySelectorAll('.item');
let currentItem = 0;
let isEnabled = true;

function changeCurrentItem (n) {
  currentItem = (n + items.length) % items.length;
}

function hideItem(direction) {
  isEnabled = false;
  items[currentItem].classList.add(direction);
  items[currentItem].addEventListener('animationend', function() {
    this.classList.remove('active',direction);
  });
}

function showItem(direction) {
  items[currentItem].classList.add('next', direction);
  items[currentItem].addEventListener('animationend', function() {
    this.classList.remove('next', direction);
    this.classList.add('active');
    isEnabled = true;
  });
}

function previousItem(n) {
  hideItem('to-right');
  changeCurrentItem(n - 1);
  showItem('from-left');
}

function nextItem(n) {
  hideItem('to-left');
  changeCurrentItem(n + 1);
  showItem('from-right');
}

PREV_BUTTON.addEventListener('click', function() {
  if (isEnabled) {
    previousItem(currentItem);
  }
});

NEXT_BUTTON.addEventListener('click', function() {
  if (isEnabled) {
    nextItem(currentItem);
  }
});

MENU.addEventListener('click', (event) => {
  MENU.querySelectorAll('li').forEach(el => el.classList.remove('active'));
  event.target.classList.add('active');
});

BURGER_MENU.addEventListener('click', (event) => {
  BURGER_MENU.querySelector('header__navigation'.forEach(el => el.classList.add('active')));
  event.target.classList.add('active');
});

BURGER_MENU.addEventListener('click', () => {
  if(document.getElementById('header__navigation').classList.contains('active')) {
    document.getElementById('header__navigation').classList.remove('active');
    document.getElementById('header__burger').classList.remove('active');
  }
  else {
    document.getElementById('header__navigation').classList.add('active');
    document.getElementById('header__burger').classList.add('active');
  }
});

TAGS.addEventListener('click', (event) => {
  TAGS.querySelectorAll('span').forEach(el => el.classList.remove('active'));
  event.target.classList.add('active');
});

PORTFOLIO.addEventListener('click', (event) => {
  PORTFOLIO.querySelectorAll('.image').forEach(el => el.classList.remove('active-image'));
  event.target.classList.add('active-image');
});

BUTTON.addEventListener('click', () => {
  const subject = document.getElementById('subject').value.toString();
  if (document.getElementById('subject').value.toString() == "") {
    document.getElementById('subject-text').innerText = "Без темы";
  }
  else {
    document.getElementById('subject-text').innerText = "Тема: " + subject;
  }

  const description = document.getElementById('description').value.toString();
  if (document.getElementById('description').value.toString() == "") {
    document.getElementById('description-text').innerText = "Без описания";
  }
  else {
    document.getElementById('description-text').innerText = "Описание: " + description;
  }
  document.getElementById('message-block').classList.remove('hidden');
});

CLOSE_BUTTON.addEventListener('click', () => {
  document.getElementById('message-block').classList.add('hidden');
});

VERTICAL_PHONE_BUTTON.addEventListener('click', () => {
  if(document.querySelector('.black-vertical-screen').classList.contains('hidden')) {
    document.querySelector('.black-vertical-screen').classList.remove('hidden');
  }
  else {
    document.querySelector('.black-vertical-screen').classList.add('hidden');
  }
});

HORIZONTAL_PHONE_BUTTON.addEventListener('click', () => {
  if(document.querySelector('.black-horizontal-screen').classList.contains('hidden')) {
    document.querySelector('.black-horizontal-screen').classList.remove('hidden');
  }
  else {
    document.querySelector('.black-horizontal-screen').classList.add('hidden');
  }
});

ALL.addEventListener('click', () => {
  shiftImages(1);
});

WEB_DESIGN.addEventListener('click', () => {
  shiftImages(2);
});

GRAPHIC_DESIGN.addEventListener('click', () => {
  shiftImages(3);
});

ARTWORK.addEventListener('click', () => {
  shiftImages(4);
});

function shiftImages(shiftLength) {
  let imageList = document.querySelectorAll("div.image");
  imageList.forEach(el => document.getElementById("portfolio-gallery").removeChild(el));
  let arr = shiftElements(Array.from(imageList),shiftLength);
  arr.forEach(el => document.getElementById("portfolio-gallery").appendChild(el));
}

function shiftElements(array, shiftLength) {
  for (let i=0;i<shiftLength;i++) {
    array.push(array.shift());
  }
  return array;
}


