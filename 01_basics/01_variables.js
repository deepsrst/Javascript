const accountId = 144553;
let accountEmail = "deep123@gmail.com";
var accountPassword = "password@123";
accountCity = "Kathmandu";
let accountState;

// accountId=2;  // not allowed

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountEmail,accountPassword,accountCity, accountState])
