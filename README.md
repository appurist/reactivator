# reactivator
A framework-independent package to transform data elements into reactive ones.

## INSPIRATION
This project was an attempt at learning how [Vue.js](https://vuejs.org/) works behind the scenes, and therefore is both inspired by Vue, and in many ways modeled after Vue. It incorporates some of the Composition API features in Vue 3, although is a much simpler implementation with fewer features and maturity. However, in spite of this, the lighter design and implementation may be appropriate for some projects.

## NOT FOR USE (YET)
This is a work-in-progress, and initial nonfunctional commit not intended for any purpose at this time. Published for end-to-end testing prior to release.

### EXAMPLE 1: Refs and Watches
```javascript
import { ref, reactive, isRef, isReactive, watch, unwatch, dumpValue }  from '@appurist/reactivator.esm';

let state = {
  test1: ref(5),
  test2: ref('Hi there'),
  test3: reactive({field1: 42, field2: 'hello'})
}

console.log("isRef(test1):", isRef(state.test1));
console.log("isReactive(test1):", isReactive(state.test1));
console.log("isRef(test3):", isRef(state.test3));
console.log("isReactive(test3):", isReactive(state.test3));

watch(state.test1, (old, val) => { 
  console.log(`watch: test1.value changed from ${dumpValue(old)} to ${dumpValue(val)}`);
})

state.test2.value = 'Hello';  // no watch installed yet, we'll miss this one

// save the watch so we can unwatch later
let saved = watch(state.test2, (old, val) => { 
  console.log(`watch: test2.value changed from ${dumpValue(old)} to ${dumpValue(val)}`);
})

// Let's define a more complex watch handler for object and array changes
function onChangeTest3 (name, prop, old, val, obj) {
  let label = name ? `test3${name}` : 'test3';
  if (Array.isArray(obj) && prop === 'length')
    console.log(`watch: ${label}.${prop} changed to ${dumpValue(val)}`);
  else
  if (Array.isArray(obj) && parseInt(prop))
    console.log(`watch: ${label}[${prop}] changed from ${dumpValue(old)} to ${dumpValue(val)}: ${dumpValue(obj)}`);
  else
  if (old !== undefined) 
    console.log(`watch: ${label}.${prop} changed from ${dumpValue(old)} to ${dumpValue(val)}`);
  else
  if (Array.isArray(val))
    console.log(`watch: ${label}.${prop} assigned a new array ${dumpValue(val)}`);
  else
  if (typeof val === 'object')
    console.log(`watch: ${label}.${prop} assigned a new object.`);
  else
    console.log(`watch: ${label}.${prop} assigned value ${dumpValue(val)}`);
}

//////////////////////////////////////////////////////////////////////////////
// Now that the watches are in place, make a couple of changes with numbers.
state.test1.value = 6;

state.test1.value++;

//////////////////////////////////////////////////////////////////////////////
// Repeat a couple of changes with strings
state.test2.value += ' world';

// We should only see the change notification above for "Hello world", not "Goodbye!"
unwatch(state.test2, saved);

state.test2.value = 'Goodbye!';

//////////////////////////////////////////////////////////////////////////////
// Now repeat with an object
state.test3.field1 = 99;  // no watch installed yet

watch(state.test3, onChangeTest3); // now install the watch

state.test3.field1 = 100;
state.test3.field3 = 'completely new';

state.test3.field2 = 'Goodbye';

state.test3.emptyArray = [  ];

state.test3.newArray = [ 'one', 'two' ];
state.test3.newArray.push('three');

state.test3.sub1 = { sub1a: 'value1a', sub1b: 'value1b' };

state.test3.sub1.sub1b = 'new1b';

unwatch(state.test3, onChangeTest3); // now uninstall the watch

state.test3.field1 = 101;
```
### OUTPUT
```
isRef(test1): true
isReactive(test1): false
isRef(test3): false
isReactive(test3): true
watch: test1.value changed from 5 to 6
watch: test1.value changed from 6 to 7
watch: test2.value changed from 'Hello' to 'Hello world'
watch: test3.field1 changed from 99 to 100
watch: test3.field3 assigned value 'completely new'
watch: test3.field2 changed from 'hello' to 'Goodbye'
watch: test3.emptyArray assigned a new array [ ]
watch: test3.newArray assigned a new array ['one','two']
watch: test3.newArray[2] changed from undefined to 'three': ['one','two','three']
watch: test3.newArray.length changed to 3
watch: test3.sub1 assigned a new object.
watch: test3.sub1.sub1b changed from 'value1b' to 'new1b'
```