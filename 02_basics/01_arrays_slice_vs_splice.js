//slice vs splice

const alphaArray= ['a','b','c','d','e','f']

console.log("original alphaArray is", alphaArray)

const slicedArray= alphaArray.slice(1,4)
console.log('--- slice completed ---')
console.log("alphaArray after sliced is ",alphaArray)
console.log("slicedArray is ",  slicedArray)

const splicedArray= alphaArray.splice(1,4)
console.log('--- splice completed ---')
console.log("alphaArray after sliced is ", alphaArray)
console.log("slicedArray is ", splicedArray)
console.log(splicedArray)


// array.slice(start, end)
// array.splice(start,deletecount)
// array.splice(start,deletecount, replaceitem1, replaceitem2,...)