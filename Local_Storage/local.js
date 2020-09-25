// Storing Data Locally
let internalUsers = [
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

document.getElementById('submit').addEventListener('click', newUser);

let newUser = () => {
  newUser = {
    fullName: document.getElementById('name').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    pics: document.getElementById('pics').value
  }
  internalUsers.push(newUser);

  localStorage.setItem('users', JSON.stringify(internalUsers));
}