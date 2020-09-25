// function sayHello() {
//   alert('Hello');
// }


// Declaring Objects
const internalUsers = [
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

internalUsers[internalUsers.length] = {
  fullName: 'Malik Mukhtar',
  email: 'malikmukhtar@gmail.com',
  phone: '09077499020',
  pics: 'tie-1.jpg'
}

internalUsers[internalUsers.length] = {
  fullName: 'Oyetunji Atilade',
  email: 'oyetunjiatilade@gmail.com',
  phone: '07082158660',
  pics: 'tie.jpg'
}



// Contents to display
const mainDisplay = () => {

  user = '';

  for (let i = 0; i < internalUsers.length; i++) {
    user += `<div>
    <img src="${internalUsers[i].pics}" style="max-height:300px;"> <br>
    <strong>Full Name</strong> : ${internalUsers[i].fullName} <br>
    <strong>Email Address</strong> : ${internalUsers[i].email} <br>
    <strong>Phone Number</strong> : ${internalUsers[i].phone} <br>
    <button onClick="editUser(${i})">Edit</button>
    <button onClick="deleteUser(${i})">Delete</button>
  </div>`
  }

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
  internalUsers.push(newUser);
  mainDisplay();
}

document.getElementById('add-user').addEventListener('click', addUser);

// Delete User
const deleteUser = (id) => {
  if (confirm(`Are you sure you want to delete ${internalUsers[id].fullName}`)) {
    internalUsers.splice(id, 1);

    mainDisplay();
  } else {
    return alert('Be sure of the user you want to delete before doing so!');
  }
}

// Edit User
const editUser = (id) => {
  let edittedUser = {
    "fullName": prompt("Enter your full Name", internalUsers[id].fullName),
    "email": prompt("Enter your email", internalUsers[id].email),
    "phone": prompt("Enter your phone", internalUsers[id].phone),
    "pics": prompt("upload profile pics", internalUsers[id].pics)
  }
  internalUsers[id] = edittedUser;

  mainDisplay();
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