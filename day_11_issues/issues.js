// let myNames = ['olamilekan', 'ezekiel', 'adedoyin', 'kayode', 'samuel'];

/*

1. Array.find(element => condition)
2. Array.find(function() {
  condition
});

3. Array.find(functionName);

*/

const internalUsers = [
  {
    fullName: 'Arimoro Olamilekan',
    email: 'arimoroolamilekan1@gmail.com',
    phone: '07082158660',
  },
  {
    fullName: 'Adetayo Omotomiwa',
    email: 'adetayoomotomiwa2020@gmail.com',
    phone: '80808885560',
  },
  {
    fullName: 'Samuel Yusuf',
    email: 'samuelyusuf@gmail.com',
    phone: '070866997660',
  }
];

// Getting data from Local Storage
// localStorage.getItem('allUsers');

// Finding from array of objects
// Array.find(element => element.key == "key to be found");
// findFullName = internalUsers.find(userObject => userObject.fullName == 'Samuel Yusuf');
// findPosition = internalUsers.findIndex(userObject => userObject.fullName == 'Samuel Yusuf');


// alert(JSON.stringify(findPosition));

const showUsers = () => {
  userContent = '';

  for (let i = 0; i < internalUsers.length; i++) {
    userContent += `
          <div>
      FullName : ${internalUsers[i].fullName} <br>
      Email : ${internalUsers[i].email} <br> 
      Phone : ${internalUsers[i].phone} <br> 
    
      <button onClick="deleteUser(${i})">Delete</button>
     <button onClick="editUser(${i})">Edit</button> <hr>
    </div>
      `;
  }

  document.getElementById("users").innerHTML = userContent;

  // Storing data to Local Storage
  localStorage.setItem('allUsers', JSON.stringify(internalUsers));
}

const deleteUser = (i) => {
  internalUsers.splice(i, 1)

  localStorage.removeItem(internalUsers[i]);

  showUsers();
}

const editUser = (i) => {

  let upDatedRecord = {
    fullName: prompt('Enter Full Name', internalUsers[i].fullName),
    email: prompt('Enter Email Address', internalUsers[i].email),
    phone: prompt('Enter Phone Number', internalUsers[i].phone)
  }

  internalUsers[i] = upDatedRecord;

  localStorage.setItem('allUsers', JSON.stringify(internalUsers));

  showUsers();
}


showUsers();