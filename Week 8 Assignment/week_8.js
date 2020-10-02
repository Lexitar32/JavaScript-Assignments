// function sayHello() {
//   alert('Hello');
// }


// Declaring Objects
allUsers = [
  {
    fullName: 'Arimoro Olamilekan',
    email: 'arimoroolamilekan1@gmail.com',
    phone: '07082158660',
    pics: 'Olamilekan.jpg'
  },
  {
    fullName: 'Samuel Yusuf',
    email: 'samuelyusuf@gmail.com',
    phone: '07082158660',
    pics: 'tie.jpg'
  }
];

allUsers[allUsers.length] = {
  fullName: 'Malik Mukhtar',
  email: 'malikmukhtar@gmail.com',
  phone: '09077499020',
  pics: 'tie-1.jpg'
}

allUsers[allUsers.length] = {
  fullName: 'Oyetunji Atilade',
  email: 'oyetunjiatilade@gmail.com',
  phone: '07082158660',
  pics: 'tie.jpg'
}

allUsers = JSON.parse(localStorage.getItem('storeUsers'));
if (allUsers == null) {
  allUsers = [];
}

// Contents to display
const mainDisplay = () => {

  user = '';

  for (let i = 0; i < allUsers.length; i++) {
    user += `<div>
    <img src="${allUsers[i].pics}" style="max-height:300px;"> <br>
    <strong>Full Name</strong> : ${allUsers[i].fullName} <br>
    <strong>Email Address</strong> : ${allUsers[i].email} <br>
    <strong>Phone Number</strong> : ${allUsers[i].phone} <br>
    <button onClick="editUser(${i})">Edit</button>
    <button onClick="deleteUser(${i})">Delete</button>
  </div>`
  }

  // localStorage.setItem('storeUsers', JSON.stringify(allUsers));

  document.getElementById('myUsers').innerHTML = user;
}

// Add New User
const addUser = () => {
  let newUser = {
    fullName: prompt('Enter your full name'),
    email: prompt('Enter a valid email address'),
    phone: prompt('Enter your mobile number'),
    pics: 'tie.jpg'
  }
  allUsers.push(newUser);

  localStorage.setItem('storeUsers', JSON.stringify(allUsers));

  mainDisplay();
}


document.getElementById('add-user').addEventListener('click', addUser);

// Delete User
const deleteUser = (id) => {
  if (confirm(`Are you sure you want to delete ${allUsers[id].fullName}`)) {
    allUsers.splice(id, 1);

    mainDisplay();
  } else {
    return alert('Be sure of the user you want to delete before doing so!');
  }

  localStorage.setItem('storeUsers', JSON.stringify(allUsers));

  mainDisplay();
}

// Edit User
const editUser = (id) => {
  let edittedUser = {
    "fullName": prompt("Enter your full Name", allUsers[id].fullName),
    "email": prompt("Enter your email", allUsers[id].email),
    "phone": prompt("Enter your phone", allUsers[id].phone),
    "pics": prompt("upload profile pics", allUsers[id].pics)
  }
  allUsers[id] = edittedUser;

  localStorage.setItem('storeUsers', JSON.stringify(allUsers));

  mainDisplay();
}

function search() {
  param = document.getElementById('searchItems').value;
  usersObject = allUsers.find(x => x.fullName === param);
  if (usersObject == undefined || usersObject == null) {
    alert(`No record found for ${param}`);
  } else {
    allUsers = [];
    allUsers.push(usersObject);

    mainDisplay();
  }
}

function searchAll() {
  param = document.getElementById('searchItems').value;
  usersObject = allUsers.filter(x => x.fullName === param);
  if (usersObject == undefined || usersObject == null) {
    alert(`No record found for ${param}`);
  } else {
    document.getElementById('recordFound').innerHTML = allUsers.length + " records Found";

    mainDisplay();
  }
}

function searchPartMatch() {
  param = document.getElementById('searchItems').value;
  allUsers = allUsers.filter(x => x.fullName.includes(param));
  if (allUsers == undefined || allUsers == null) {
    alert(`No record found for ${param}`);
  } else {
    document.getElementById('recordFound').innerHTML = allUsers.length + " records Found";

    mainDisplay();
  }

  // allUsers = [];
  // allUsers.push(usersObject);
}

mainDisplay();

// const myUser =
//   `
//     ${internalUsers.map((x) =>
//     `<div>
//         <img src="${x.pics}" style="max-height:300px;"> <br>
//         <strong>Full Name</strong> : ${x.fullName} <br>
//         <strong>Email Address</strong> : ${x.email} <br>
//         <strong>Phone Number</strong> : ${x.phone} <br>
//         <button>Add</button>
//         <button>Delete</button>
//      </div>`
//   )};
//   `;

// document.getElementById('myUsers').innerHTML = myUser;