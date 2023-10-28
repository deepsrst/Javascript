// Dates

//  let myDate= new Date();
//  console.log(myDate.toString());   // Fri Oct 27 2023 00:04:18 GMT+0545 (Nepal Time)
//  console.log(myDate.toDateString());    // Fri Oct 27 2023
//  console.log(myDate.toLocaleDateString());   // 10/27/2023
//  console.log(typeof myDate);  //  object


//  let myCreatedDate = new Date(2023, 0, 12);   // Thu Jan 12 2023 , month is from 0 array / jan= 0 
//  console.log(myCreatedDate.toDateString())    // Thu Jan 12 2023
//  // if the date is given more than the days of the given months, then remaining days are carry over to month and if still left then to year
//  let myCreatedDateCarryOver = new Date(2023, 12, 34);   // Sat Feb 03 2024 , days are  carried over to month and then year.
//  console.log(myCreatedDateCarryOver.toDateString())



// let  myCreatedDate2= new Date("2023-01-12")   // 2023-01-12T00:00:00.000Z
// let  myCreatedDate3= new Date("2023-01-33")   // Invalid Date  , as  excess days are not carried over or need to input exact valid date .
// console.log(myCreatedDate2)
// console.log(myCreatedDate3)


// let myTimeStamp = Date.now();   //  gives current date and time in millisecond since 1970 Jan 1 
// console.log(myTimeStamp);   // 1698347290106
// console.log(Math.floor(myTimeStamp/1000)) // 1698347290    converting millisecond into second and flooring it or round it.

let newDate= new Date();
console.log(newDate);    //2023-10-26T19:15:26.321Z
console.log(newDate.getMonth()+1);   //10
console.log(newDate.getDay());     //   5   
console.log(newDate.toLocaleDateString('default',{weekday:"long"}));   //  Friday 
  