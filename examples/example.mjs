import { ref, reactive, computed, isRef, isReactive, isComputed, watch, unwatch, dumpValue } from '../dist/reactivator.esm.js'

// This is a richer "kitchen sink" example of the functions available from the reactivator package.

let state = {
  test1: ref(5),
  test2: ref('Hi there'),
  test3: reactive({textField: 'Hello', numField: 42})
}

console.log("isRef(test1):", isRef(state.test1));
console.log("isReactive(test1):", isReactive(state.test1));
console.log("isRef(test3):", isRef(state.test3));
console.log("isReactive(test3):", isReactive(state.test3));

// define a computed reference based on state.test1 and an addOne function
function addOne(context) {
  return context.value + 1;
}
let computedAddOne = computed(state.test1, addOne);

console.log("isComputed(state.test1):", isComputed(state.test1));
console.log("isComputed(computedAddOne):", isComputed(computedAddOne));

// define a computed reference based on state.test3 and a combineFields function
function combineFields(context) {
  return context.textField + ' #' + context.numField;
}
let computedCombine = computed(state.test3, combineFields)

watch(state.test1, (old, val) => { 
  console.log(`watch: test1.value changed from ${dumpValue(old)} to ${dumpValue(val)}`);
  console.log(`watch: computed addOne(test1) is now ${dumpValue(computedAddOne.value)}`);
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
  console.log(`watch: computed combineFields(state.test3) is now ${dumpValue(computedCombine.value)}`);
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
state.test3.numField = 99;  // no watch installed yet

watch(state.test3, onChangeTest3); // now install the watch

state.test3.numField = 100;
state.test3.field3 = 'completely new';

state.test3.textField = 'Goodbye';

state.test3.emptyArray = [  ];

state.test3.newArray = [ 'one', 'two' ];
state.test3.newArray.push('three');

state.test3.sub1 = { sub1a: 'value1a', sub1b: 'value1b' };

state.test3.sub1.sub1b = 'new1b';

unwatch(state.test3, onChangeTest3); // now uninstall the watch

state.test3.numField = 101;   // this change will be missed
