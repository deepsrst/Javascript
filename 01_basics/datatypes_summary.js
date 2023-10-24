  // Primitive Data Types
   // 7 Types : String, Number, Boolean, null , undefined, Symbol, BigInt
const name="Deepak Shrestha"
const number=9840015785
const isActive= true

  // Non primitive / Reference Data Type
  // its reference are allocated in the memory
  // Array, Objects, Functions

  const  officeColleague= ["deepak","suraj","romil"]
  const employeeDetails=
   {
 employeename:"Deepak Shrestha",
 id: 1234
  }
  const printFunction = ()=>{ console.log("hello all")}

console.log(typeof name)    // string
console.log(typeof number)  // number
console.log(typeof isActive) // boolean
console.log(typeof officeColleague) // object
console.log(typeof employeeDetails) // object
console.log(typeof printFunction)  // function