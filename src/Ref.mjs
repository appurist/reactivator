class Ref {
  constructor(thing) {
    this._value = thing;
    this._subs = [ ];
    this._ref = this;
  }
  
  get value () {
    return this._value;
  }

  set value (val) { 
    let old = this._value;
    this._value = val;
    // notify observers
    this._subs.forEach(subFunc => 
      subFunc(old, val)      
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

export { Ref };