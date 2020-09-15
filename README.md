# reactivator
A framework-independent package to transform data elements into reactive ones.

## INSPIRATION
This project was an attempt at learning how [Vue.js](https://vuejs.org/) works behind the scenes, and therefore is both inspired by Vue, and in many ways modeled after Vue. It incorporates some of the Composition API features in Vue 3, although is a much simpler implementation with fewer features and maturity. However, in spite of this, the lighter design and implementation may be appropriate for some projects.

## NOT FOR USE (YET)
This is a work-in-progress, and initial nonfunctional commit not intended for any purpose at this time. Published for end-to-end testing prior to release.

### EXAMPLE 1: Refs and Watches
```javascript
import { ref, reactive, watch, unwatch } from '@appurist/reactivator.esm';

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

state.init(); // to have local watches within the state object

state.test1.value = 'Hello';
console.log('test1 =', state.test1.value);

// Now add another "top-level" watch AFTER the first change.
let saved = undefined;
watch(state.test1, saved = () => { 
  console.log('Top-level watch noticed test1 change to', state.test1.value);
})

state.test1.value += ' world';
console.log('test1 =', state.test1.value);

unwatch(state.test1, saved);  // stop the top-level watch on test1
// We should only see the one "Top-level" change notification above for "Hello there"

state.test1.value = 'Goodbye!';
console.log('test1 =', state.test1.value);

//////////////////////////////////////////////////////////////////////////
// Repeat a couple of changes with numbers
state.test2.value = 6;
console.log('test2 =', state.test2.value);

state.test2.value++;
console.log('test2 =', state.test2.value);
```
### OUTPUT
```
test1 = Hi there
src/test.mjs:7
test2 = 5
src/test.mjs:8
test1 changed to Hello
src/test.mjs:11
test1 = Hello
src/test.mjs:22
test1 changed to Hello world
src/test.mjs:11
Top-level watch noticed test1 change to Hello world
src/test.mjs:27
test1 = Hello world
src/test.mjs:31
test1 changed to Goodbye!
src/test.mjs:11
test1 = Goodbye!
src/test.mjs:37
test2 changed to 6
src/test.mjs:14
test2 = 6
src/test.mjs:42
test2 changed to 7
src/test.mjs:14
test2 = 7
```