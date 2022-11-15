// Мобильное меню
const hamburger = document.querySelector('.hamburger');
const mobNav = document.querySelector('.navigation');
const overlay = document.querySelector('#overlay');
const noScroll = document.body;

hamburger.addEventListener('click', function () {
    if (noScroll.classList.contains('noscroll')) {
      noScroll.style.cssText = '';
    } else {
      noScroll.style.cssText = `padding-right: ${window.innerWidth - noScroll.offsetWidth}px`;
    }
    this.classList.toggle("active");
    mobNav.classList.toggle("active");
    noScroll.classList.toggle("noscroll");
});

mobNav.addEventListener('click', function() {
    this.classList.remove('active');
    noScroll.classList.remove("noscroll");
    hamburger.classList.remove("active");
});

// Закрытие мобильного меню при ресайзе экрана
window.addEventListener('resize', function(){
    mobNav.classList.remove('active');
    noScroll.classList.remove("noscroll");
    hamburger.classList.remove("active");
});
