const hide = document.querySelector('.hide');
const hamb = document.querySelector('.hamb');
const close = document.querySelector('.close');

function toogleF() {
  if (hide.classList.contains('showHide')) {
    hide.classList.remove('showHide');
    close.style.display = 'none';
    hamb.style.display = 'block';
  } else {
    hide.classList.add('showHide');
    close.style.display = 'block';
    hamb.style.display = 'none';
  }
}

const menbt = document.querySelector('.menbtn');
menbt.addEventListener('click', toogleF);

const navitms = document.querySelectorAll('.navitm');
navitms.forEach((navitm) => (navitm.addEventListener('click', toogleF)));

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
