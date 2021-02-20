const get = document.createElement('div');
get.innerHTML = 'TIIDELab Fellows are JS pros <br>';
get.append('I am a developer');

document.getElementById('pCont').appendChild(get);

const loadUsers = () => {
  document.getElementById('loadUserBtn').innerHTML = '<img src="ajax-loader.gif"> Loading';

  setTimeout(() => {
    document.getElementById('loadUserBtn').innerHTML = 'Load Users';
  }, 1000);
}

allParagraphs = document.getElementsByTagName('p');
allParagraphs[1].innerHTML = '<h3> JavaScript is so sweet </h3>';

myClasses = document.getElementsByClassName('myClasses');
myClasses[1].innerHTML = console.log('Thanks');