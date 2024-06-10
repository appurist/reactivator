class Ref {
  constructor(thing) {
    this._value = thing;
    this._dirty = 0;
    this._subs = [ ];
    this._ref = this;
    this._name = ''+thing;
  }

  get value () {
    return this._value;
  }

  set value (val) {
    let old = this._value;
    if (val === old) return;

    this._value = val;
    this._dirty++;
    // notify observers
    this._subs.forEach(subFunc =>
      subFunc(old, val, 'value', this._name, this)
    );
  }

  isDirty(since) {
    // absolute - absolute rather than inequality also handles signed wrap
    return since ? this._dirty - since : this._dirty;
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
