// Ajax = Asynchronus JS and XML
// Callback
// Promise
// Async Await

// Callback Example
function loadJs(source, callback) {
  let script = document.createElement('script');

  script.src = source;

  script.onload = function() {
    return script;
  }

  script.onerror = function () {
    return new Error('Script cannot be loaded');
  }

  document.head.appendChild(script);
};

loadJs();