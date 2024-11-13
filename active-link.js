// Find all links in the topnav
var links = document.querySelectorAll('.topnav li a');

// Normalize the pathname (removes trailing slashes and strips the filename)
function getLinkPathname(link) {
  // Check if the link has a valid href attribute
  if (link.href) {
    var linkUrl = new URL(link.href, window.location.href); // Create a full URL object
    var pathname = linkUrl.pathname.replace(/\/$/, ''); // Remove any trailing slashes
    if (pathname.endsWith('index.html')) {
      pathname = pathname.replace('index.html', ''); // Strip index.html if present
    }
    return pathname;
  }
  return null; // Return null if the link has no valid href
}

// Normalize the current page's pathname (removes trailing slashes and strips the filename)
function getCurrentPathname() {
  var pathname = location.pathname.replace(/\/$/, ''); // Normalize current pathname
  if (pathname.endsWith('index.html')) {
    pathname = pathname.replace('index.html', ''); // Strip index.html if present
  }
  return pathname;
}

// Custom rule to keep "ABONNEMENT" highlighted on specific pages
function shouldHighlightAbonnement() {
  // Add pages where "ABONNEMENT" should stay active
  const abonnementPages = [
    '/subscription-overview.html',  // Always highlight "ABONNEMENT" on this page
    '/subscription-form.html',          // Optionally, you can add other related pages here
    '/subscription-success.html'   // Example of another related page (add more as needed)
  ];

  // If the current page is one of these, return true
  return abonnementPages.includes(location.pathname);
}

// Loop through the links to set the active link based on the current URL
function setActiveLink() {
  links.forEach(function(link) {
    var linkPath = getLinkPathname(link);
    var currentPath = getCurrentPathname();

    // Only proceed if linkPath is a valid value (i.e., not null)
    if (linkPath && linkPath === currentPath) {
      // If they match, remove the active class from all links
      links.forEach(function(link) {
        link.classList.remove('active-link');
      });
      // Then add the active class to the matched link
      link.classList.add('active-link');
    }
  });

  // Handle the "ABONNEMENT" link separately if the page is in the custom "ABONNEMENT" pages list
  if (shouldHighlightAbonnement()) {
    // Find the "ABONNEMENT" link and add the "active-link" class to it
    const abonnementLink = document.querySelector('a[href="subscription-overview.html"]');
    if (abonnementLink) {
      abonnementLink.classList.add('active-link');
    }
  }
}

// Set the active link when the page loads
setActiveLink();

// Add event listeners for click events to update active-link on click
links.forEach(function(link) {
  link.addEventListener('click', function() {
    // Update active link when clicked
    setTimeout(function() {
      setActiveLink();  // Update active link after page has navigated
    }, 100);  // Timeout to allow the navigation to occur before checking
  });
});
