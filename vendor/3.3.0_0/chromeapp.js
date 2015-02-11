/**
 * load the chrome application on body load
 */
window.onload = function () {
  app.load();
  app.resize();

  document.getElementById('contents').style.visibility = 'visible';
};

// override ajax, we may need to ask additional permissions from the user
var _fetch = ajax.fetch;
ajax.fetch = function (method, url, body, headers, callback) {
  chrome.permissions.request({
    origins: [url]
  }, function (granted) {
    if (granted) {
      _fetch(method, url, body, headers, callback);
    }
    else {
      callback(new Error('No permission granted'), 0);
    }
  });
};
