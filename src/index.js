class Reactivator {
  constructor(thing) {
    this.value = thing;
    this._subs = [ ];
  }
  
  get () {
    return this.value;
  }

  set (val) { 
    this.value = val;
    // notify observers
    this._subs.forEach(subFunc => 
      subFunc()
    );
  }
}

function _Reactivator (thing) {
  let obj = new Reactivator(thing);
  // obj = thing;  // force first initialization using setter
  return obj;
}


Reactivator.prototype.subscribe =  function (func) {
  if (!this._subs.includes(func))
    this._subs.push(func);
}

Reactivator.prototype.unsubscribe = function (func) {
  this._subs = this._subs.filter(f => f !== func);
}

module.exports.Reactivator = function (val) {
  let obj = new Reactivator(val);
  // obj = val;  // force initial assignment via setter
  return obj;
}
