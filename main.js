chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('popup.html', {
    id: 'speechwin',
    width: 800,
    height: 500
  });
});