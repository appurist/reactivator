var reactiveHandler = function (instance) {
	return {
    get (obj, prop, receiver) {
      if (prop === '_reactive') return instance._reactive;
      if (prop === '_subs') return instance._subs;
      if (prop === '_label') return instance._label;

      // console.log(`Proxy get for '${prop}'`);
      // See https://gomakethings.com/how-to-create-a-reactive-state-based-ui-component-with-vanilla-js-proxies/
      // and https://gomakethings.com/how-to-detect-changes-to-nested-arrays-and-objects-inside-a-proxy/
      // for this bit of very clever voodoo for the conditional.
      if (['[object Object]', '[object Array]'].indexOf(Object.prototype.toString.call(obj[prop])) > -1) {
        console.log(`New proxy for ${prop}`);
        return new Proxy(obj[prop], reactiveHandler(instance));
      }        

      return obj[prop];
    },
    set (obj, prop, value) {
      console.log(`Proxy set '${prop}' to ${value}`); 
      // if (prop === '_reactive') return instance._reactive = value;
      if (prop === '_subs') return instance._subs = value;
      if (prop === '_label') return instance._label = value;

      // console.log(`Proxy set for '${prop}' from ${old} to ${value}`); 
      let old = obj[prop];
      obj[prop] = value;
      // notify observers
      instance._subs.forEach(subFunc => 
        subFunc(obj, prop, old, value)
      );
      return obj[prop];
    },
    deleteProperty: function (obj, prop) {
      delete obj[prop];
      return true;
    }      
  }
}

class Reactive {
  constructor(obj, label) {
    this._obj = obj;
    this._subs = [ ];
    this.obj = new Proxy(obj, reactiveHandler(this));
    // this.obj._reactive = this;
    this._reactive = this;
    this._label = label;
    return this.obj;
  }
}

export { Reactive };
