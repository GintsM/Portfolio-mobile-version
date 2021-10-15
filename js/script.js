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
const emailVal = document.getElementById('email');

form.addEventListener('submit', (event) => {
  if (emailVal.value !== emailVal.value.toLowerCase()) {
    event.preventDefault();
    warning.innerHTML = 'Please use only lower case characters for email.';
  }
});

// Local storage

const contName = document.getElementById('name');
const contEmail = emailVal;
const contTextArea = document.getElementById('textarea');

function addToLocalStorage() {
  let addToLocalStorageArr = {name: contName.value, mail: contEmail.value, text: contTextArea.value};
  const contactString = JSON.stringify(addToLocalStorageArr);
  localStorage.setItem('formdata', contactString);
}

function setFromLocalStorage() {
  const getValuesFromStor = JSON.parse(localStorage.getItem('formdata'));
  contName.value = getValuesFromStor.name;
  contEmail.value = getValuesFromStor.mail;
  contTextArea.value = getValuesFromStor.text;
}

if(localStorage.getItem('formdata')) {
  setFromLocalStorage();
}

form.addEventListener('change', addToLocalStorage);