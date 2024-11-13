  var slides = document.querySelectorAll('.slide-mobil');
  var mobileScreenWidth = 767;

  function loadMobileImages() {
    if (window.innerWidth <= mobileScreenWidth) {
      for (var i = 0; i < slides.length; i++) {
        var mobileSrc = slides[i].getAttribute('data-mobile-src');
        slides[i].setAttribute('src', mobileSrc);
      }
    }
  }

  window.addEventListener('resize', loadMobileImages);
  loadMobileImages();

