(function() {
  // This script handles SPA routing on GitHub Pages
  
  // Parse the URL query parameters
  var match = window.location.search.match(/\?p=\/(.*)$/);
  var query = window.location.search.match(/&q=(.*)$/);
  
  if (match) {
    var pathSegments = match[1].split('/');
    var cleanPath = pathSegments.join('/');
    var cleanQuery = query ? query[1].replace(/~and~/g, '&') : '';
    var newUrl = window.location.pathname.replace(/\/$/, '') + 
                '/' + cleanPath + 
                (cleanQuery ? '?' + cleanQuery : '') + 
                window.location.hash;
    
    // Navigate to the correct route
    window.history.replaceState(null, null, newUrl);
  }
})(); 