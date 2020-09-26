import { ref, reactive, computed } from '../dist/reactivator.esm.js'

let lambdaValue = 12;
let computedSubtract = computed(() => {
  return lambdaValue - 1;
});

console.log('----\nlambda: should start with 12 and 11:', lambdaValue, computedSubtract.value);
lambdaValue = 100;
console.log('lambda: should be 100 and 99:', lambdaValue, computedSubtract.value);
lambdaValue += 10;
console.log('lambda: should be 110 and 109:', lambdaValue, computedSubtract.value);

let testRef = ref(42)
function addOne(context) {
  return context.value + 1;
}
let computedAdd = computed(testRef, addOne);

console.log('----\ntestRef: should start with 42 and 43:', testRef.value, computedAdd.value);
testRef.value = 100;
console.log('testRef: should be 100 and 101:', testRef.value, computedAdd.value);
testRef.value += 10;
console.log('testRef: should be 110 and 111:', testRef.value, computedAdd.value);

let testObj = reactive({textField: 'Hello', numField: 100})
function combineFields(context) {
  return context.textField + ' #' + context.numField;
}
let computedCombine = computed(testObj, combineFields)

console.log(`----\ntestObj: should start with 'Hello #100':`, computedCombine.value);
testObj.numField++;
console.log(`testObj: should be 'Hello #101':`, computedCombine.value);
testObj.numField = 999;
testObj.textField = 'Goodbye';
console.log(`testObj: should be 'Goodbye #999':`, computedCombine.value);
