class Ref {
  constructor(thing) {
    this._value = thing;
    this._subs = [ ];
  }
  
  get value () {
    return this._value;
  }

  set value (val) { 
    this._value = val;
    // notify observers
    this._subs.forEach(subFunc => 
      subFunc()
    );
  }

  watch (func) {
    if (!this._subs.includes(func)) {
      this._subs.push(func);
    }
  }  

  unwatch (func) {
    if (this._subs.includes(func)) {
      this._subs = this._subs.filter(f => f !== func);
    }
  }  
}

function watch(r, func) {
  return r.watch(func);
}
function unwatch(r, func) {
  return r.unwatch(func);
}

function ref(thing) {
  return new Ref(thing);
}

export { ref, watch, unwatch };
