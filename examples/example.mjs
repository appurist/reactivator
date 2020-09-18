import { ref, reactive, isRef, isReactive, watch, unwatch, dumpValue } from '../dist/reactivator.esm.js'

// This is a richer "kitchen sink" example of the functions available from the reactivator package.

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
// This is an ugly function provided to show how powerful the parameters are in the watch callback.
// Note dumpValue returns the text representation of strings as strings, arrays as arrays, etc.
// See the output below for the end result of this function. 
function onChangeTest3 (old, val, prop, name, obj) {
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
    console.log(`watch: ${label}.${prop} assigned a new object: ${dumpValue(val, true)}`);
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

state.test2.value = 'Goodbye!'; // no watches, this one is missed

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

state.test3.field1 = 101;   // this change will be missed