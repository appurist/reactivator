import { reactive, watch, unwatch, dumpValue } from '../dist/reactivator.esm.js'

let state = reactive({field1: 42, field2: 'hello'})

function onStateChange(old, val, prop, name, obj) {
  let context = name ? 'state'+name : 'state'
  console.log(`${context}.${[prop]} has changed from ${dumpValue(old)} to ${dumpValue(val)}`)
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