function Reactivator (thing) {
  let obj = {
    value: thing,
    get () { return value },
    set (val) { value = val }
  }
  obj = thing;  // force first initialization using setter
  return obj;
}

module.exports.Reactivator = Reactivator;
