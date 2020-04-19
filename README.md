# reactivator
A framework-independent package to transform data elements into reactive ones.

## NOT FOR USE (YET)
This is a work-in-progress, and initial nonfunctional commit not intended for any purpose at this time. Published for end-to-end testing prior to release.

```javascript
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
```
