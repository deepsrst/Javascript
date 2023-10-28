//Array Declaration 

const myArr= [0,1,3,2,4,5]
const myHeroes= ["IronMan","Spiderman","Antman"]
const myArr2= new Array(1,2,3,4)

// console.log(myArr2[1])   //2

// Array Method

myArr.push(6)
myArr.push(7)
console.log(myArr)   // [
//     0, 1, 2, 3,
//     4, 5, 6
// //   ]

// myArr.pop()   // removes the last element in the array
// console.log(myArr)

// //unshift 
// console.log("unshift 9")
// myArr.unshift(9)   // add the element at the first position i.e. 0 index
// console.log(myArr)
// console.log("shift")
// myArr.shift() // remove the first element i.e  0 index
// console.log(myArr)

// output
// [
//     0, 1, 2, 3,
//     4, 5, 6, 7
//   ]
//   [
//     0, 1, 2, 3,
//     4, 5, 6
//   ]
//   unshift 9
//   [
//     9, 0, 1, 2,
//     3, 4, 5, 6
//   ]
//   shift
//   [
//     0, 1, 2, 3,
//     4, 5, 6
//   ]



// +++++++++++++//
// console.log("2 "+myArr.includes(2))
// console.log("2 "+myArr.indexOf(2))
// console.log("12 "+myArr.includes(12))
// console.log("12 "+myArr.indexOf(12))

/*
OUTPUT
2 true
2 3
12 false
12 -1
*/
// +++++++++++++//

//  const newArray= myArr.join() // convert the array into string  and return it
//  console.log(newArray)   
//  console.log("type of newArray is "+ typeof newArray)

 /*
 OUTPUT
 [
  0, 1, 3, 2,
  4, 5, 6, 7
]
0,1,3,2,4,5,6,7
type of newArray is string
 */

const slicedArray= myArr.slice(1)
console.log(`sliced array : ${slicedArray}`)
console.log(typeof slicedArray)