const buttonBurger = document.querySelector('#button_burger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');

const anchor = document.querySelector('.text-container');
const scroll = document.querySelectorAll('a[href^="#"]');

buttonBurger.addEventListener('click', function() {
  if (header.classList.contains('open')) { //close burger menu
    header.classList.remove('open');
    fadeElems.forEach(function(element) {
      element.classList.remove('fade-in');
      element.classList.add('fade-out');
    });
  } else { //open burger menu
    header.classList.add('open');
    fadeElems.forEach(function(element) {
      element.classList.remove('fade-out');
      element.classList.add('fade-in');
    });
  }
});

anchor.addEventListener('click', function() {
  header.classList.remove('open');
  fadeElems.forEach(function(element) {
    element.classList.remove('fade-in');
    element.classList.add('fade-out');
  });
});


scroll.forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

const slider = tns({
    container: '.my-slider',
    loop: true,
    items: 1,
    gutter: 20,
    slideBy: 'page',
    nav: false,
    autoplay: true,
    speed: 400,
    autoplayButtonOutput: false,
    lazyload: true,
    controlsContainer: "#customize-controls",
    responsive: {
        640: {
            items: 2,
        },

        768: {
            items: 4,
        }
    }

});
