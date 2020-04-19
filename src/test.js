let { Reactivator } = require('./index')

let test1 = Reactivator('Goodbye')
let test2 = Reactivator(5)
console.log("test1 =", test1)
console.log("test2 =", test2)

test1 = "Hello"
console.log("test1 =", test1)

test2 = 6;
console.log("test2 =", test2)

test1 += " there"
console.log("test1 =", test1)

test2++;
console.log("test2 =", test2)
