function Card (title, expierence, image,) {
    this.title = title;
    this.expierence=expierence;
    this.image=image;
    this.text='Lorem ipsum dolor sit amet, consectetur adipiscing\
      elit, sed do eiusmod tempor incididunt ut labore et dolore \
      magna aliqua. Sem et tortor consequat id porta nibh. Velit \
      aliquet sagittis id consectetur. Urna id volutpat lacus laoreet.\
      Fames ac turpis egestas integer eget aliquet nibh praesent \
      tristique. Egestas diam in arcu cursus euismod quis viverra \
      nibh. Nisl rhoncus mattis rhoncus urna neque. Non tellus orci\
      ac auctor augue mauris augue. Vitae purus faucibus ornare \
      suspendisse. Enim nulla aliquet porttitor lacus luctus. Nunc\
      aliquet bibendum enim facilisis gravida neque. Accumsan \
      tortor posuere ac ut consequat semper. Sed velit dignissim\
      sodales ut eu. Cras tincidunt lobortis feugiat vivamus at \
      augue eget arcu. Orci a scelerisque purus semper eget duis at \
      tellus at. Scelerisque eleifend donec pretium vulputate sapien \
      nec. Aliquam id diam maecenas ultricies mi.';
    this.languages={
      'first' : 'html',
      'second' : 'css',
      'third' : 'javaScript',
      'fourth' : 'github',
      'fifth' : 'ruby',
      'sixth' : 'Bootstrap'
    };
    this.links={
      'live' : 'See Live',
      'source' : 'See Source',
    }
  };
  
  const card1 = new Card('Tonic', ['CANOPY','Back End Dev','2021'],'images/Snap1.png');
  const card2 = new Card('MULTI-POST STORIES', ['FACEBOOK','Fullstack Dev','2021'],'images/Snap2.png');
  const card3 = new Card('Facebook 360', ['FACEBOOK','Fullstack Dev','2021'],'images/Snap3.png');
  const card4 = new Card('UBER NAVIGATION', ['UBER','Lead Developer','2021'],'images/Snap4.png');
  
  const cardList = [card1, card2, card3, card4];
  const selectorList = [ '#portfolio','section.card.ko','section.card.ro', 'section.card.last']
  const selectorUlwork = ['#portfolio > div.popup > ul', 'section.card.ko > div.popup > ul', 'section.card.ro > div.popup > ul', 'section.card.last > div.popup > ul' ]
  const selectorUlLang = ['#portfolio > div.popup > article > div > ul','section.card.ko > div.popup > article > div > ul','section.card.ro > div.popup > article > div > ul','section.card.last > div.popup > article > div > ul']
  
  for ( let i=0; i<cardList.length; i++){
    let cardCopy = {...(cardList[i])};
  
    const popup1 = document.querySelector(selectorList[i]);
    
    const div = document.createElement('div');
    popup1.appendChild(div);
    div.classList.add('popup');
    
    const h2 = document.createElement('h2');
    div.appendChild(h2);
    let txt = document.createTextNode(cardCopy.title);
    h2.innerHTML=cardCopy.title;
    
    const ul = document.createElement('ul');
    div.appendChild(ul);
    ul.classList.add('work');
    let expier =document.querySelector(selectorUlwork[i])
    for (const exp in cardCopy.expierence) {
      let ko = document.createElement('li');
      ko.innerHTML = cardCopy.expierence[exp];
      expier.append(ko);
    }
    
    const img = document.createElement('img');
    div.appendChild(img);
    img.classList.add('popimg');
    img.setAttribute('src',cardCopy.image);
    
    const art = document.createElement('article')
    div.append(art);
    art.classList.add('articpop');
    const p = document.createElement('p');
    art.appendChild(p);
    p.innerHTML=cardCopy.text;
    
    const container = document.createElement('div');
    art.appendChild(container);
    
    const langList = document.createElement('ul');
    container.appendChild(langList);
    let app = document.querySelector(selectorUlLang[i]);
    
    for (const lang in cardCopy.languages) {
      let li = document.createElement('li');
      li.textContent = cardCopy.languages[lang];
      app.append(li);
      li.classList.add('languages');
    }
    
    for (const linkButton in cardCopy.links) {
      const button = document.createElement('button');
      button.textContent = cardCopy.links[linkButton];
      container.append(button);
    }
    
    const closeButton = document.createElement('span');
    div.appendChild(closeButton);
    closeButton.classList.add('closeButton')
    closeButton.textContent='X';
  }
  
  const firstButton = document.querySelector('#portfolio > div > form > button');
  let firstCardPop = document.querySelector('#portfolio > div.popup');
  const sB = ['#portfolio > div > form > button', 'body > section.card.ro > div.tonic > form > button', '#hand > button', 'body > section.card.last > div:nth-child(2) > form > button'];
  const sP = ['section.card.ko > div.popup', 'section.card.ro > div.popup', '#portfolio > div.popup', 'section.card.last > div.popup']
  function toogleF1() {
    if (firstCardPop.classList.contains('show')) {
      firstCardPop.classList.remove('show');
    } else {
      firstCardPop.classList.add('show');
    }
  }
  
  const closePop = document.querySelectorAll('span');
  firstButton.addEventListener('click', toogleF1);
  closePop.forEach((navit) => navit.addEventListener("click", toogleF1));
  