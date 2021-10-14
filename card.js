function Card(title, expierence, image) {
  this.title = title;
  this.expierence = expierence;
  this.image = image;
  this.text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem et tortor consequat id porta nibh. Velit aliquet sagittis id consectetur. Urna id volutpat lacus laoreet. Fames ac turpis egestas integer eget aliquet nibh praesent tristique. Egestas diam in arcu cursus euismod quis viverra nibh. Nisl rhoncus mattis rhoncus urna neque. Non tellus orci ac auctor augue mauris augue.';
  this.languages = {
    1: 'html',
    2: 'css',
    3: 'javaScript',
    4: 'github',
    5: 'ruby',
    6: 'Bootstrap',
  };
  this.links = {
    1: 'See Live',
    2: 'See Source',
  };
  this.href = {
    1: 'https://gintsm.github.io/Portfolio-mobile-version/',
    2: 'https://github.com/GintsM/Portfolio-mobile-version',
  };
}

const card1 = new Card('Tonic', ['CANOPY', 'Back End Dev', '2021'], 'images/Snap1.png');
const card2 = new Card('MULTI-POST STORIES', ['FACEBOOK', 'Fullstack Dev', '2021'], 'images/Snap2.png');
const card3 = new Card('Facebook 360', ['FACEBOOK', 'Fullstack Dev', '2021'], 'images/Snap3.png');
const card4 = new Card('UBER NAVIGATION', ['UBER', 'Lead Developer', '2021'], 'images/Snap4.png');

const cardList = [card1, card2, card3, card4];
const selectorList = ['#portfolio', 'section.card.ko', 'section.card.ro', 'section.card.last'];

for (let num = 0; num < cardList.length; num += 1) {
  const popup1 = document.querySelector(selectorList[num]);
  const modalContainer = document.createElement('div');
  popup1.appendChild(modalContainer);
  modalContainer.classList.add('hidden');
  const div = document.createElement('div');
  modalContainer.appendChild(div);
  div.classList.add('popup');
  const h2 = document.createElement('h2');
  div.appendChild(h2);
  h2.innerHTML = cardList[num].title;
  const ul = document.createElement('ul');
  div.appendChild(ul);
  ul.classList.add('work');
  for (let i = 0; i < 3; i += 1) {
    const ko = document.createElement('li');
    ko.innerHTML = cardList[num].expierence[i];
    ko.classList.add('expierpop');
    ul.append(ko);
  }
  const imgCont = document.createElement('figure');
  div.appendChild(imgCont);
  imgCont.setAttribute('id', 'imgfigure');
  const img = document.createElement('img');
  imgCont.appendChild(img);
  img.classList.add('popimg');
  img.setAttribute('src', cardList[num].image);
  const art = document.createElement('article');
  div.append(art);
  art.classList.add('articpop');
  const p = document.createElement('p');
  art.appendChild(p);
  p.innerHTML = cardList[num].text;
  const container = document.createElement('div');
  art.appendChild(container);
  const langList = document.createElement('ul');
  container.appendChild(langList);
  const lastLangelem = [];
  for (let i = 1; i <= 6; i += 1) {
    const li = document.createElement('li');
    li.textContent = cardList[num].languages[i];
    langList.append(li);
    li.classList.add('languages');
    lastLangelem.push(li);
  }
  for (let i = 3; i < lastLangelem.length; i += 1) {
    lastLangelem[i].classList.add('scrow');
  }
  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('livebuttons');
  container.append(buttonContainer);
  for (let i = 1; i <= 2; i += 1) {
    const button = document.createElement('button');
    button.textContent = cardList[num].links[i];
    buttonContainer.append(button);
    button.classList.add('popbuttons');
  }

  const closeButton = document.createElement('span');
  div.appendChild(closeButton);
  closeButton.classList.add('closeButton');
  closeButton.textContent = 'X';
}

const remPopArr = document.querySelectorAll('div.hidden');

const seeBtn = document.querySelectorAll('form:nth-child(5) > button:nth-child(1)');
const openButton = Array.from(seeBtn);

const clBtn = document.querySelectorAll('div.hidden > div > span');
const hideArr = Array.from(clBtn);

function closeFunction(num) {
  if (remPopArr[num].classList.contains('modal')) {
    remPopArr[num].classList.remove('modal');
  } else {
    remPopArr[num].classList.add('modal');
  }
}

openButton.forEach((item) => item.addEventListener('click', () => { closeFunction(openButton.indexOf(item)); }));
hideArr.forEach((closb) => closb.addEventListener('click', () => { closeFunction(hideArr.indexOf(closb)); }));

const seeLive = document.querySelectorAll('div:nth-child(2) > button:nth-child(1)');
seeLive.forEach((live) => live.addEventListener('click', () => {window.location = card1.href[1]; }));
const seeSource = document.querySelectorAll('div:nth-child(2) > button:nth-child(2)');
seeSource.forEach((source) => source.addEventListener('click', () => {window.location = card1.href[2] }));