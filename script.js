const MENU = document.getElementById('menu');
const BUTTON = document.getElementById('button');
const CLOSE_BUTTON = document.getElementById('close-button');
const TAGS = document.getElementById('tags');
const VERTICAL_PHONE_BUTTON = document.getElementById('vertical-phone-button');
const HORIZONTAL_PHONE_BUTTON = document.getElementById('horizontal-phone-button');
const PREV_BUTTON = document.getElementById('prev-button');
const NEXT_BUTTON = document.getElementById('next-button');
const ALL = document.getElementById('all');
const PORTFOLIO = document.getElementById('portfolio-gallery');

MENU.addEventListener('click', (event) => {
  MENU.querySelectorAll('li').forEach(el => el.classList.remove('active'));
  event.target.classList.add('active');
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
  if(document.getElementById('vertical-screen').classList.contains('black-screen')) {
    document.getElementById('vertical-screen').classList.remove('black-screen');
    document.getElementById('vertical-screen').classList.add('vertical-screen');
  }
  else {
    document.getElementById('vertical-screen').classList.add('black-screen');
  }
});

HORIZONTAL_PHONE_BUTTON.addEventListener('click', () => {
  if(document.getElementById('horizontal-screen').classList.contains('horizontal-black-screen')) {
    document.getElementById('horizontal-screen').classList.remove('horizontal-black-screen');
    document.getElementById('horizontal-screen').classList.add('horizontal-screen');
  }
  else {
    document.getElementById('horizontal-screen').classList.add('horizontal-black-screen');
  }
});

PREV_BUTTON.addEventListener('click', () => {
  if (document.getElementById('slider2').classList.contains('hidden')) {
    document.getElementById('slider2').classList.remove('hidden');
  document.getElementById('slider1').classList.add('hidden');
  }
  else {
    document.getElementById('slider2').classList.add('hidden');
    document.getElementById('slider1').classList.remove('hidden');
  }
});

NEXT_BUTTON.addEventListener('click', () => {
  if (document.getElementById('slider2').classList.contains('hidden')) {
    document.getElementById('slider2').classList.remove('hidden');
  document.getElementById('slider1').classList.add('hidden');
  }
  else {
    document.getElementById('slider2').classList.add('hidden');
    document.getElementById('slider1').classList.remove('hidden');
  }
});

ALL.addEventListener('click', () => {
  const imageList = document.querySelectorAll("div.image");
  const arr = Array.from(imageList);

  // for (let i=0; i<imageList.length;i++) {
  //   arr.push(imageList[i]);
  // }
  console.log(arr);
});


