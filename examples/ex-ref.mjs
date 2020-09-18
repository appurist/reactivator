import { ref, watch } from '../dist/reactivator.esm.js'

let count = ref(42)

console.log("Starting count is", count.value)
watch(count, (old, val) => {
  console.log(`count has changed from ${old} to ${val}`)
})
count.value++;
count.value++;