class Reactivator {
  constructor(thing) {
    this.value = thing;
    this._subs = [ ];
  }
  
  get () { return value }

  set (val) { 
    this.value = val;
    // notify observers
    this._subs.forEach(sub => 
      sub()
    );
  }

  subscribe(func) {
    if (!this._subs.includes(func))
      this._subs.push(func);
  }

  unsubscribe(func) {
    this._subs = this._subs.filter(f => f !== func);
  }  
}

module.exports.Reactivator = Reactivator;
