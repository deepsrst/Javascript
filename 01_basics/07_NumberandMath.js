const otherNumber = 123.896

// console.log(otherNumber.toPrecision(4))  //123.4

// const hundreds= 1000000
// console.log(hundreds.toLocaleString())   // by default US    // 1,000,000
// console.log(hundreds.toLocaleString('ne-NP'))  // १०,००,०००

   

//  ++++++++++++++++++ Math ++++++++++++++++

console.log(Math.random());   //gives random number between 0 and 1
console.log((Math.random() *  10)+1)  // for non zero
console.log(Math.floor(Math.random()*10)+1)  // gives random beween 1 and 10


// to get in a range 
const min = 10 
const max = 20

console.log(Math.floor(Math.random() * (max-min+1)) +min)   // gives random between  min and max
// max- min to give the difference between min and max range
// + min at last to ensure the random number will be above  min number

