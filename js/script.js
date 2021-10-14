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

// Validation for email

const form = document.querySelector('#about > footer > form');
const warning = document.querySelector('#warning');

form.addEventListener('submit', (event) => {
  const emailVal = document.getElementById('email').value;

  if (emailVal !== emailVal.toLowerCase()) {
    event.preventDefault();
    warning.innerHTML = 'Please use only lower case characters for email.';
  }
});
