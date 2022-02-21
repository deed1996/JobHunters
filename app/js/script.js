const buttonBurger = document.querySelector('#button_burger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');

buttonBurger.addEventListener('click', function() {
  console.log('open burger');

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

var menuBlock = '<menu class="open_menu">' +
                '<div class="text-container">' +
                  '<ol>' +
                  '<li>' +
                    '<div class="text-open-menu-overlay" data-hover="Are you ready to work remotely?" >' +
                      '<a href="#remote_work" > remote work has changed job hunting </a>' +
                    '</div>' +
                  '</li>' +
                  '<li>' +
                    '<div class="text-open-menu-overlay" data-hover="Learn how to ace your next virtual interview">' +
                      '<a href="#remote_work" > ace a virtual interview </a>' +
                    '</div>' +
                  '</li>' +
                  '<li>' +
                    '<div class="text-open-menu-overlay" data-hover="Further reading and help available" >' +
                      '<a href="#remote_work"> Useful links </a>' +
                    '</div>' +
                  '</li>' +
                '</ol>' +
                '</div>' +
                '</menu>';

// Inserting the code block to wrapper element
document.getElementById("menuWrapper").innerHTML = menuBlock;
