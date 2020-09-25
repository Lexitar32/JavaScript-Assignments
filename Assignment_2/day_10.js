// Declaring Variables
const myName = document.querySelector('#name');
const myEmail = document.querySelector('#email');
const myPhone = document.querySelector('#phone');
const myPassword = document.querySelector('#password');
const myCpassword = document.querySelector('#cpassword');
const myPicture = document.querySelector('#picture');

usersGrid = JSON.parse(localStorage.getItem('store'));
if (usersGrid == null) {
  usersGrid = [];
}


// Show New User Details
const userDisplay = () => {
  user = '';

  for (let i = 0; i < usersGrid.length; i++) {
    user += ` <div>
        <img src="${usersGrid[i].pics}" style="max-height: 100px;">
        <strong>Full Name</strong> : ${usersGrid[i].name}<br>
        <strong>Email</strong> : ${usersGrid[i].email}<br>
        <strong>Phone</strong> : ${usersGrid[i].phone}<br>
        <button  style="background-color:red; color:#FFF" onClick="deleteUser(${i})" >Delete</button>
        <button style="background-color:green; color:#FFF" onClick="editUser(${i})" >Edit</button>
      </div>
      `;
  }
  localStorage.setItem('store', JSON.stringify(usersGrid));

  document.querySelector('.users-grid').innerHTML = user;
}


// Add New User 
function newUser(e) {
  e.preventDefault();

  newUser = {
    "name": myName.value,
    "email": myEmail.value,
    "phone": myPhone.value,
    "password": myPassword.value,
    "cpassword": myCpassword.value,
    "pics": myPicture.value
  }
  localStorage.setItem('store', JSON.stringify(usersGrid));

  usersGrid.push(newUser);

  userDisplay();
};

document.querySelector('#submitButton').addEventListener('click', newUser);

userDisplay();