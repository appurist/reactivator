//import { ref, reactive, watch, unwatch } from '../dist/reactivator.esm.js'
import { ref, reactive, watch, unwatch } from '../src/index.js'

let state = {
  test1: ref('Hi there'),
  test2: ref(5),
  test3: reactive({field1: 42, field2: 'hello'}),
  init() {
    console.log('test1 =', this.test1.value)
    console.log('test2 =', this.test2.value)
    console.log('test3 =', this.test3)

    this.test1.watch((old, val) => {
      console.log(`test1.value changed from ${old} to ${val}`);
    })
    this.test2.watch((old, val) => {
    console.log(`test2.value changed from ${old} to ${val}`);
    })
    this.test3.watch((obj, prop, old, val) => {
      console.log(`test3.${prop} changed from ${old} to ${val}`)
    })
  }
}

state.init();

state.test1.value = 'Hello';

// Now add another "top-level" watch AFTER the first change.
let saved = undefined;
watch(state.test1, saved = () => { 
  console.log('Top-level watch noticed test1 change to', state.test1.value);
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
  console.log(`Top-level watch noticed test3.${prop} changed from ${old} to ${val}`);
})

state.test3.field1 = 100;
state.test3.field3 = 'completely new';

unwatch(state.test3, saved3);

state.test3.field2 = 'Goodbye';

state.test3.arr = [ 'one' ];
state.test3.arr.push('two');

state.test3.sub1 = { sub1a: 'value1a', sub1b: 'value1b' };

state.test3.sub1.sub1b = 'new1b';
