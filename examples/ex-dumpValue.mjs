import { dumpValue } from '../dist/reactivator.esm.js'

console.log(dumpValue(100))
console.log(dumpValue('a string'))
console.log(dumpValue("another string"))
console.log(dumpValue(1 === 2))
console.log(dumpValue(2 === 2))
console.log(dumpValue([  ]))
console.log(dumpValue([ 'one', 'two', 'three' ]))
console.log(dumpValue({ sub1a: 'value1a', sub1b: 'value1b' }, false))
console.log(dumpValue({ sub1a: 'value1a', sub1b: 'value1b' }, true))
