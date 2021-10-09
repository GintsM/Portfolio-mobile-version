const hide = document.querySelector('.hide');
const hamb = document.querySelector('.hamb');
const close = document.querySelector('');

function toogleF() {
  if (hide.classList.contains('showHide')) {
    hide.classList.remove('showHide');
    close.style.display = 'none';
    hambLLL.style.display = 'block';
  } else {
    hide.classList.add('showHide');
    close.style.display = 'block';
    hamb.style.display = 'none';
  }
}

const menbt = document.querySelector('.menbtn');
menbt.addEventListener('click', toogleF());

const navitms = document.querySelectorAll('.navitm');
navitms.forEach((navitm) => (navitm.addEventListener('click', toogleF)));