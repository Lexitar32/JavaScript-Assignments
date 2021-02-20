/*
Promise States
Pending // waiting state
Resolve // when successful
Reject // when not successful */

// let promise = new Promise(function (resolve, reject) {
//   resolve('successful');
//   reject('Not successful');
// });

checkValue(5).then(function () {
  // Do something when successful
  alert('JavaScript is a bae👩‍❤️‍👩');
}).catch(function (error) {
  // Do something when not done
});

function checkValue(v) {
  return new Promise(function (resolve, reject) {
    if (v > 10) {
      resolve(alert('The number is greater than 10'));
    } else {
      reject(new Error('Number too low'));
    }
  });
};

function createAudio(audioSource) {
  return new Promise(function (resolve, reject) {
    let audio = document.getElementById('audio');
    let source = document.getElementById('source');
    audio.setAttribute('controls', 'controls');
    audio.setAttribute('id', 'audio');
    source.src = audioSource;
    audio.appendChild(source);

  });
};