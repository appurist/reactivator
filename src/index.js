class Ref {
  constructor(thing) {
    this._value = thing;
    this._subs = [ ];
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

class Reactive {
  constructor(obj) {
    let _this = this;
    this._obj = obj;
    this._subs = [ ];

    this.handler = {
      get (target, prop, receiver) {
        if (prop === 'watch') return _this.watch;
        if (prop === 'unwatch') return _this.unwatch;
        if (prop === '_subs') return _this._subs;

        // See https://gomakethings.com/how-to-create-a-reactive-state-based-ui-component-with-vanilla-js-proxies/
        // and https://gomakethings.com/how-to-detect-changes-to-nested-arrays-and-objects-inside-a-proxy/
        // for this bit of very clever voodoo for the conditional.
        if (['[object Object]', '[object Array]'].indexOf(Object.prototype.toString.call(obj[prop])) > -1) {
          return new Proxy(obj[prop], _this.handler);
        }        

        console.log(`Proxy get for '${prop}'`);
        return obj[prop];
      },
      set (obj, prop, value) {
        if (prop === 'watch') return;
        if (prop === 'unwatch') return;
        if (prop === '_subs') return _this._subs = value;

        // console.log(`Proxy set for '${prop}' from ${old} to ${value}`); 
        let old = obj[prop];
        obj[prop] = value;
        // notify observers
        _this._subs.forEach(subFunc => 
          subFunc(obj, prop, old, value)
        );
        return obj[prop];
      },
      deleteProperty: function (obj, prop) {
        delete obj[prop];
        return true;
      }      
    }

    this.obj = new Proxy(obj, this.handler);
    // this.obj.watch = this.watch;
    return this.obj;
  }
  
  get value () {
    return this.obj;
  }
  set value (val) {
    console.error("You cannot set the value of a reactive() object itself, set data members only.") 
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

function reactive(thing) {
  return new Reactive(thing);
}

export { ref, reactive, watch, unwatch };
