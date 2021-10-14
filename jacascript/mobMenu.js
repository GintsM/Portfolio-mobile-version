const hideMenu = document.querySelector('.hide');
const hambButton = document.querySelector('.hamb');
const closeElemetn = document.querySelector('.closeScreen');
const menuLinks = document.querySelectorAll('.hide > li');

function showMenu() {
  hideMenu.classList.toggle('menu');
  hambButton.classList.toggle('removeHamb');
  closeElemetn.classList.toggle('showClose');
}

hambButton.addEventListener('click', showMenu);
closeElemetn.addEventListener('click', showMenu);
menuLinks.forEach((li) => li.addEventListener('click', showMenu));