var reactiveHandler = function (instance, name) {
	return {
    get (obj, prop, receiver) {
      if (prop === '_reactive') return instance._reactive;
      if (prop === '_subs') return instance._subs;
      if (prop === '_name') return instance._name;
      if (prop === '_options') return instance._options;

      // console.log(`Proxy get for '${prop}'`);
      // See https://gomakethings.com/how-to-create-a-reactive-state-based-ui-component-with-vanilla-js-proxies/
      // and https://gomakethings.com/how-to-detect-changes-to-nested-arrays-and-objects-inside-a-proxy/
      // for this bit of very clever voodoo for the conditional.
      if (['[object Object]', '[object Array]'].indexOf(Object.prototype.toString.call(obj[prop])) > -1) {
        let newName = `${name || ''}.${prop}`;
        //console.log(`>> New proxy for ${newName}`);
        return new Proxy(obj[prop], reactiveHandler(instance, newName));
      }        

      return obj[prop];
    },
    set (obj, prop, value) {
      // console.log(`Proxy set '${prop}' to ${value}`); 
      // if (prop === '_reactive') return instance._reactive = value;
      if (prop === '_subs') return instance._subs = value;
      if (prop === '_name') return instance._name = value;
      if (prop === '_options') return instance._options = value;

      // console.log(`Proxy set for '${prop}' from ${old} to ${value}`); 
      let old = obj[prop];
      obj[prop] = value;
      // notify observers
      instance._subs.forEach(sub => 
        sub(old, value, prop, name, value)
      );
      return obj[prop];
    },
    deleteProperty: function (obj, prop) {
      // console.log(`<< Deleting prop: ${prop}`);
      delete obj[prop];
      return true;
    }      
  }
}

function Reactive (_obj, _name, _options) {
  let instance = { _obj, _name, _options, _subs: [ ] }
  instance._reactive = instance;
  instance.obj = new Proxy(_obj, reactiveHandler(instance, _name));
  return instance.obj;
}

export { Reactive };
