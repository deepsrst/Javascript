const marvel_heros= ["thor","ironman","spiderman"]
const dc_heros=["superman","flash","batman"]

// marvel_heros.push(dc_heros)   //[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// console.log(marvel_heros)
// console.log(marvel_heros[3][1])    //flash

// const concated_heros=  marvel_heros.concat(dc_heros)
// console.log(concated_heros)

// const spreaded_hero = [...marvel_heros, ...dc_heros]
// console.log(spreaded_hero)

// const messedup_array= [1,2 ,3, [4,5],[6,7,[8,9,10,[1,2],11,14,]]]
// const flat_array= messedup_array.flat(Infinity)


// console.log("messedup_array ",messedup_array);
// console.log("flat_array ",flat_array);


console.log(Array.isArray("Deepak"))  //false
console.log(Array.from("Deepak"))     //[ 'D', 'e', 'e', 'p', 'a', 'k' ]

let order1 = 50
let order2 = 100
let order3 = 75

console.log(Array.of(order1, order2,order3))    //[ 50, 100, 75 ]
