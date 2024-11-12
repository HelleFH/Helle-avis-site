// Find all links in the topnav
var links = document.querySelectorAll('.topnav a');

// Loop through the links to set the active link based on the current URL
for (var i = 0; i < links.length; i++) {
  var link = links[i];

  // Compare the pathname of the link with the current page's pathname
  if (link.pathname === location.pathname) {
    // Remove active-link class from all links
    links.forEach(function(link) {
      link.classList.remove('active-link');
    });
    
    // Add active-link class to the matched link
    link.classList.add('active-link');
    break; // Stop once the active link is found
  }
}

// Add event listeners for click events to update active-link on click
links.forEach(function(link) {
  link.addEventListener('click', function() {
    // Remove the active-link class from all links
    links.forEach(function(link) {
      link.classList.remove('active-link');
    });

    // Add the active-link class to the clicked link
    link.classList.add('active-link');
  });
});
