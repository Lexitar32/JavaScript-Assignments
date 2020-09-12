// DAY 3
// IF-ELSE STATEMENT
// AIRTIME-SELF, AIRTIME-OTHERS, DATA, TRANSFER
// SELECT OPTIONS
let myOption = "Welcome to Lexitar Services Limited \n Select your options: \n 1. Airtime-self \n 2. Airtime-others \n 3. Data \n 4. Transfer";
let myOptions = parseInt(prompt(myOption));

// FIRST OPTION
if (myOptions === 1) {

  // SELECT NETWORK
  let myNetwork = "Select your network: \n 1. MTN \n 2. Airtel \n 3. GLO \n 4. 9mobile";
  let myNetworks = parseInt(prompt(myNetwork));

  // ENTER AMOUNT
  if (myNetworks >= 1) {
    let myAmount = prompt("Enter Amount");

    // CONFIRM PAYMENT
    if (myAmount = Number) {
      let final = confirm("Are you sure you want to complete this transaction");
      alert("Successful Subscription, Thanks!");
    } else {
      alert("Enter the correct amount");
    }
  }
}

// SECOND OPTION
if (myOptions === 2) {

  // SELECT NETWORK
  let myNetwork = "Select your network: \n 1. MTN \n 2. Airtel \n 3. GLO \n 4. 9mobile";
  let myNetworks = parseInt(prompt(myNetwork));

  // ENTER RECEIVERS NUMBER
  if (myNetworks >= 1) {
    let myNumber = prompt("Enter receiver mobile number");

    // ENTER AMOUNT
    if (myNumber >= 1) {
      let myAmount = prompt("Enter Amount");

      // CONFIRM PAYMENT
      if (myAmount = Number) {
        let final = confirm("Are you sure you want to complete this transaction");
        alert("Successful Subscription, Thanks!");
      } else {
        alert("Enter the correct amount");
      }
    }
  }
}

// THIRD OPTION
if (myOptions === 3) {
  // SELECT NETWORK
  let myNetwork = "Select your network: \n 1. MTN \n 2. Airtel \n 3. GLO \n 4. 9mobile";
  let myNetworks = parseInt(prompt(myNetwork));

  // SELECT DATA OPTIONS
  if (myNetworks >= 1) {
    let myData = "Select an option \n 1. N100 for 100MB \n 2. N200 for 250MB \n 3. N300 for 500MB \n 4. N500 for 800MB";
    let myDatas = parseInt(prompt(myData));

    // ENTER RECEIVERS NUMBER
    if (myDatas >= 1) {
      let myNumber = prompt("Enter receiver mobile number");

      // CONFIRM PAYMENT
      if (myNumber >= 1) {
        let final = confirm("Are you sure you want to complete this transaction");
        alert("Successful Subscription, Thanks!");
      } else {
        alert("Enter the correct amount");
      }
    }
  }
}

// FOURTH OPTION
if (myOptions === 4) {
  // SELECT NETWORK
  let myBank = "Select your Bank: \n 1. Access Bank \n 2. GTB \n 3. UBA \n 4. First Bank";
  let myBanks = parseInt(prompt(myBank));

  // ENTER RECEIVERS ACCOUNT NUMBER
  if (myBanks >= 1) {
    let myNumber = prompt("Enter receiver account number");

    // CONFIRM PIN
    if (myNumber >= 1) {
      let myPin = prompt("Enter your 4 digit pin");

      // CONFIRM PAYMENT
      if (myPin >= 1) {
        let final = confirm("Are you sure you want to complete this transaction");
        alert("Transfer is completed, Thanks!");
      } else {
        alert("Enter the correct amount");
      }
    }
  }
}