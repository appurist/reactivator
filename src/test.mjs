import { ref, watch, unwatch } from '../dist/reactivator.esm.js'

let state = {
  test1: ref('Hi there'),
  test2: ref(5),
  init() {
    console.log('test1 =', this.test1.value)
    console.log('test2 =', this.test2.value)

    this.test1.watch(() =>
      console.log('test1 changed to', this.test1.value)
    )
    this.test2.watch(() => 
      console.log('test2 changed to', this.test2.value)
    )
  }
}

state.init();

state.test1.value = 'Hello';
console.log('test1 =', state.test1.value);

// Now add another "top-level" watch AFTER the first change.
let saved = undefined;
watch(state.test1, saved = () => { 
  console.log('Top-level watch noticed test1 change to', state.test1.value);
})

state.test1.value += ' world';
console.log('test1 =', state.test1.value);

// We should only see the one "Top-level" change notification above for "Hello there"
unwatch(state.test1, saved);

state.test1.value = 'Goodbye!';
console.log('test1 =', state.test1.value);

//////////////////////////////////////////////////////////////////////////
// Repeat a couple of changes with numbers
state.test2.value = 6;
console.log('test2 =', state.test2.value);

state.test2.value++;
console.log('test2 =', state.test2.value);