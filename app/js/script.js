const buttonBurger = document.querySelector('#button_burger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');

buttonBurger.addEventListener('click', function() {
  console.log('open burger');

  if(header.classList.contains('open')) { //close burger menu
    header.classList.remove('open');
    fadeElems.forEach(function(element){
      element.classList.remove('fade-in');
      element.classList.add('fade-out');
    });
  } else { //open burger menu
    header.classList.add('open');
    fadeElems.forEach(function(element){
      element.classList.remove('fade-out');
      element.classList.add('fade-in');
    });
  }

});
