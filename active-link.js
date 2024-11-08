var links = document.querySelectorAll('.topnav a');

for (var i = 0; i < links.length; i++) {
  var link = links[i];
  if (link.href === location.href) {
    links.forEach(function(link) {
      link.classList.remove('active-link');
    });
    link.classList.add('active-link');
    break;
  }
}

links.forEach(function(link) {
  link.addEventListener('click', function() {
    var currentActive = document.querySelector('.topnav a.active');
    if (currentActive) {
      currentActive.classList.remove('active-link');
    }
    link.classList.add('active-link');
  });
});
