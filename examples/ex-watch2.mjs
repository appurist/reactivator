import { reactive, watch, unwatch, dumpValue } from '../dist/reactivator.esm.js'

let state = reactive({field1: 42, field2: 'hello'})

// Let's define a more complex watch handler for object and array changes
function onStateChange(old, val, prop, name, obj) {
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

state.field1 = 99;  // no watch installed yet

// Let's define a more complex watch handler for object and array changes
watch(state, onStateChange)

state.field1 = 100;
state.field3 = 'completely new';
state.field2 = 'Goodbye';

state.emptyArray = [  ];

state.newArray = [ 'one', 'two' ];
state.newArray.push('three');

state.sub1 = { sub1a: 'value1a', sub1b: 'value1b' };
state.sub1.sub1b = 'new1b';

unwatch(state, onStateChange); // now uninstall the watch
state.field1 = 101;