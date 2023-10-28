//Splice 

// SYTAX => Array.Splice(startindex, deletecount)


// // case 1 
// const staffArray= ["deepak","suraj","romil","sumita"]
// console.log(`original array is : ${staffArray}`)
// const splicedArray= staffArray.splice(0,1)
// console.log(`After sliced, staffArray is  ${staffArray}`)
// console.log(`New Sliced arrayed is   ${splicedArray} `)

// /*
// Case 1 OUTPUT

// original array is : deepak,suraj,romil,sumita
// After sliced, staffArray is  suraj,romil,sumita
// New Sliced arrayed is   deepak 
// */



// // case 2 
// const staffArray= ["deepak","suraj","romil","sumita"]
// console.log(`original array is : ${staffArray}`)
// const splicedArray= staffArray.splice(1,0)
// console.log(`After sliced, staffArray is  ${staffArray}`)
// console.log(`New Sliced arrayed is   ${splicedArray} `)

// /*
// Case  2 OUTPUT

// original array is : deepak,suraj,romil,sumita
// After sliced, staffArray is  deepak,suraj,romil,sumita
// New Sliced arrayed is   
// */





// // case 3
// const staffArray= ["deepak","suraj","romil","sumita"]
// console.log(`original array is : ${staffArray}`)
// const splicedArray= staffArray.splice(0,1,'New Staff')
// console.log(`After sliced, staffArray is  ${staffArray}`)
// console.log(`New Sliced arrayed is   ${splicedArray} `)

// /*
// Case 3 OUTPUT

// original array is : deepak,suraj,romil,sumita
// After sliced, staffArray is  New Staff,suraj,romil,sumita
// New Sliced arrayed is   deepak 
// */



// // case 4
// const staffArray= ["deepak","suraj","romil","sumita"]
// console.log(`original array is : ${staffArray}`)
// const splicedArray= staffArray.splice(0,2,'New Staff')
// console.log(`After sliced, staffArray is  ${staffArray}`)
// console.log(`New Sliced arrayed is   ${splicedArray} `)

// /*
// Case 4 OUTPUT

// original array is : deepak,suraj,romil,sumita
// After sliced, staffArray is  New Staff,romil,sumita
// New Sliced arrayed is   deepak ,suraj
// */


// case 5
const staffArray= ["deepak","suraj","romil","sumita"]
console.log(`original array is : ${staffArray}`)
const splicedArray= staffArray.splice(0,1,'New Staff 1','New Staff 2')
console.log(`After sliced, staffArray is  ${staffArray}`)
console.log(`New Sliced arrayed is   ${splicedArray} `)

/*
Case 5 OUTPUT

original array is : deepak,suraj,romil,sumita
After sliced, staffArray is  New Staff 1,New Staff 2,suraj,romil,sumita
New Sliced arrayed is   deepak 
*/
