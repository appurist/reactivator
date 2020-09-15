//import { ref, reactive, watch, unwatch } from '../dist/reactivator.esm.js'
import { ref, reactive, isRef, isReactive, watch, unwatch } from '../src/index.js'

let state = {
  test1: ref('Hi there'),
  test2: ref(5),
  test3: reactive({field1: 42, field2: 'hello'}),
  init() {
    this.test1.watch((old, val) => {
      console.log(`Watch noticed test1.value changed from ${old} to ${val}`);
    })
    this.test2.watch((old, val) => {
      console.log(`Watch noticed test2.value changed from ${old} to ${val}`);
    })
  }
}

state.init();

state.test1.value = 'Hello';

// Now add another "top-level" watch AFTER the first change.
let saved = undefined;
watch(state.test1, saved = (old, val) => { 
  console.log(`Watch (top-level) for test1 noticed test1.value changed from ${old} to ${val}`);
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
watch(state.test3, saved3 = (obj, prop, old, val) => { 
  console.log(`Watch (top-level) for test3 noticed ${prop} change from ${old} to ${val}`);
})

state.test3.field1 = 100;
state.test3.field3 = 'completely new';

state.test3.field2 = 'Goodbye';

state.test3.newArray = [ 'one' ];
state.test3.newArray.push('two');

state.test3.sub1 = { sub1a: 'value1a', sub1b: 'value1b' };

state.test3.sub1.sub1b = 'new1b';

unwatch(state.test3, saved3);

state.test3.field1 = 101;
