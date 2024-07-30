$(document).ready(function() {
    let carousel = $('.carousel');
    let itemWidth = $('.carousel-item').outerWidth(true);

    $('.carousel-item').clone().appendTo(carousel);

    function loopCarousel() {
        carousel.css('transition', 'transform 20s linear');
        carousel.css('transform', `translateX(${itemWidth}px)`);

        setTimeout(function() {
            carousel.css('transition', 'none');
            carousel.css('transform', 'translateX(0)');
            $('.carousel-item').last().prependTo(carousel);
        }, 20000); 
    }

    loopCarousel();
    setInterval(loopCarousel, 20000); 
});


var loading = function(e) {
    e.preventDefault();
    e.stopPropagation();
    e.target.classList.add('loading');
    e.target.setAttribute('disabled','disabled');
    setTimeout(function(){
      e.target.classList.remove('loading');
      e.target.removeAttribute('disabled');
    },1500);
  };
  
  var btns = document.querySelectorAll('button');
  for (var i=btns.length-1;i>=0;i--) {
    btns[i].addEventListener('click',loading);
  }
  





