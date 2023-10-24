// Stack (Primitve type)  and Heap(non-primitive type)

/*in stack, while copying/ reference, it just gives the copy of original data
so , whenever we change in the second/ copy , then it doesn't affect the original data

in heap, while reference, it gives the direct memory location, 
so , whenever we change in the second copy/ object , it changes the main address location 
so both data will be the same or altered/changed.

*/
let firstCompanyName= "Deep Co"
let secondCompanyName= firstCompanyName
secondCompanyName= "Ganga Co"

let firstCompanyDetails= {
    name:'Deepak Company',
    address:'Nepal'
}

let secondCompanyDetails=firstCompanyDetails
secondCompanyDetails.name='Deep Company'

console.log(firstCompanyName)     // Deep Co
console.log(secondCompanyName)    // Ganga Co
console.log(firstCompanyDetails)   //{ name: 'Deep Company', address: 'Nepal' }
console.log(secondCompanyDetails)   //{ name: 'Deep Company', address: 'Nepal' }