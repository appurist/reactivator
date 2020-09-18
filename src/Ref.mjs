class Ref {
  constructor(thing) {
    this._value = thing;
    this._subs = [ ];
    this._ref = this;
    this._name = ''+thing;
  }
  
  get value () {
    return this._value;
  }

  set value (val) { 
    let old = this._value;
    this._value = val;
    // notify observers
    this._subs.forEach(subFunc => 
      subFunc(old, val, 'value', this._name, this)      
    );
  }

  watch (func) {
    if (!this._subs.includes(func)) {
      this._subs.push(func);
    }
    return func;
  }  

  unwatch (func) {
    if (this._subs.includes(func)) {
      this._subs = this._subs.filter(f => f !== func);
      return true;
    }
    return false;
  }  
}

export { Ref };
