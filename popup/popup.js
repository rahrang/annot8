document.addEventListener('DOMContentLoaded', function() {
  var renderOverlayButton = document.getElementById('renderOverlay');
  renderOverlayButton.addEventListener('click', function() {

    // alert('clicked!')

    chrome.tabs.getSelected(null, function(tab) {
        alert(tab.url);
    });
    
  }, false);
}, false);