import { ref, watch, unwatch } from '../dist/reactivator.esm.js'

let count = ref(42);

console.log("Starting count is", count.value);

count.value++;  // watch not installed yet, this change missed (43)

let saved = watch(count, (old, val) => {
  console.log(`count has changed from ${old} to ${val}`)
})

count.value++;  // observed as 43 -> 44
count.value++;  // observed as 44 -> 45

unwatch(count, saved);

count.value++;  // watch uninstalled, this change missed (46)
