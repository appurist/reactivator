//import { ref, reactive, watch, unwatch } from '../dist/reactivator.esm.js'
import { ref, reactive, isRef, isReactive, watch, unwatch } from '../src/index.js'

function dumpValue(val) {
  let result = ''
  if (Array.isArray(val)) {
    for (let x of val) {
      if (result)
        result += ','+dumpValue(x);
      else
        result += '['+dumpValue(x);
    }
    return result ? result + ']' : '[ ]'
  } else {
    return (typeof val === 'string') ? `'${val}'` : ''+val;
  }
}

let state = {
  test1: ref('Hi there'),
  test2: ref(5),
  test3: reactive({field1: 42, field2: 'hello'}),
  init() {
    this.test1.watch((old, val) => {
      console.log(`Watch noticed test1.value changed from ${dumpValue(old)} to ${dumpValue(val)}`);
    })
    this.test2.watch((old, val) => {
      console.log(`Watch noticed test2.value changed from ${dumpValue(old)} to ${dumpValue(val)}`);
    })
  }
}

state.init();

state.test1.value = 'Hello';

// Now add another "top-level" watch AFTER the first change.
let saved = undefined;
watch(state.test1, saved = (old, val) => { 
  console.log(`Watch (top-level) for test1.value changed from ${dumpValue(old)} to ${dumpValue(val)}`);
})

state.test1.value += ' world';

// We should only see the one "Top-level" change notification above for "Hello there"
unwatch(state.test1, saved);

state.test1.value = 'Goodbye!';

//////////////////////////////////////////////////////////////////////////
// Repeat a couple of changes with numbers
state.test2.value = 6;

state.test2.value++;

//////////////////////////////////////////////////////////////////////////
// Now repeat with an object
state.test3.field1 = 99;
let saved3 = undefined;
watch(state.test3, saved3 = (name, prop, old, val, obj) => {
  let label = name ? `test3${name}` : 'test3';
  if (Array.isArray(obj) && prop === 'length')
    console.log(`Watch (top-level) for ${label}.${prop} changed to ${dumpValue(val)}`);
  else
  if (Array.isArray(obj) && parseInt(prop))
    console.log(`Watch (top-level) for ${label}[${prop}] changed from ${dumpValue(old)} to ${dumpValue(val)}`);
  else
  if (old !== undefined) 
    console.log(`Watch (top-level) for ${label}.${prop} changed from ${dumpValue(old)} to ${dumpValue(val)}`);
  else
  if (Array.isArray(val))
    console.log(`Watch (top-level) for ${label}.${prop} assigned a new array ${dumpValue(val)}`);
  else
  if (typeof val === 'object')
    console.log(`Watch (top-level) for ${label}.${prop} assigned a new object.`);
  else
    console.log(`Watch (top-level) for ${label}.${prop} assigned value ${dumpValue(val)}`);
})

state.test3.field1 = 100;
state.test3.field3 = 'completely new';

state.test3.field2 = 'Goodbye';

state.test3.emptyArray = [  ];

state.test3.newArray = [ 'one', 'two' ];
state.test3.newArray.push('three');

state.test3.sub1 = { sub1a: 'value1a', sub1b: 'value1b' };

state.test3.sub1.sub1b = 'new1b';

unwatch(state.test3, saved3);

state.test3.field1 = 101;
