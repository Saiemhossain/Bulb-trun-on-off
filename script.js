const btnOn = document.querySelector('#btnOn');
const btnOff = document.querySelector('#btnOff'); 
const light = document.querySelector('#light');

btnOn.addEventListener('click', () => {
  light.src = 'img/light-on.gif';
});

btnOff.addEventListener('click', () => {
  light.src = 'img/light-off.gif';
});


