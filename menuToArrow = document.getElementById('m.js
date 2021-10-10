menuToArrow = document.getElementById('menu-to-arrow');
arrowToMenu = document.getElementById('arrow-to-menu');


function animateMenuToArrow(){
  menuToArrow.beginElement();
}

function animateArrowToMenu(){
  arrowToMenu.beginElement();
}

// Demo script

wrapper = $('.animation-demo');

$('.to-arrow').click(function(){
  animateMenuToArrow();
  wrapper.addClass('is-arrow').removeClass('is-menu');
});

$('.to-menu').click(function(){
  animateArrowToMenu();
  wrapper.addClass('is-menu').removeClass('is-arrow');
});


