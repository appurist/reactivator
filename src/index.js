import { Ref } from './Ref.js';
import { Computed } from './Computed.js';
import { Reactive } from './Reactive.js';

function dumpValue(val, objToJSON) {
  let result = ''
  if (Array.isArray(val)) {
    for (let x of val) {
      if (result)
        result += ','+dumpValue(x);
      else
        result += '['+dumpValue(x);
    }
    return result ? result + ']' : '[ ]'
  } else {
    if (objToJSON && (typeof val === 'object')) {
      return JSON.stringify(val);
    }
    return (typeof val === 'string') ? `'${val}'` : ''+val;
  }
}

function isRef(r) {
  return r.hasOwnProperty('_ref') && r._ref === r;
}

function isReactive(r) {
  if (r._reactive)
    if (r._reactive.obj === r)
      return true;

  return false;
}

function isComputed(r) {
  return r.hasOwnProperty('_computed') && r._computed === r;
}

// returns a non-zero value if modified since 'since' update
// where 'since' is an internal incrementing revision number.
function isDirty(r, since) {
  if (isRef(r)) {
    return r.isDirty(since);
  }
  if (isReactive(r)) {
    return r.isDirty(since);
  }
  return 0;
}

function watch(r, func) {
  if (isRef(r)) {
    return r.watch(func);
  }
  if (isReactive(r)) {
    if (!r._reactive._subs.includes(func)) {
      r._reactive._subs.push(func);
    }
    return func;
  }
  console.error('watch supports only ref() or reactive() objects.')
}

function unwatch(r, func) {
  if (isRef(r)) {
    return r.unwatch(func);
  }
  if (isReactive(r)) {
    if (r._reactive._subs.includes(func)) {
      r._reactive._subs = r._reactive._subs.filter(f => f !== func);
    }
    return;
  }
  console.error('unwatch supports only ref() or reactive() objects.')
}

function ref(thing) {
  return new Ref(thing);
}

function reactive(thing) {
  return new Reactive(thing);
}

function computed(context, exprFunc) {
  return new Computed(context, exprFunc);
}

export {
  Ref, Reactive, Computed,
  ref, reactive, computed,
  isRef, isReactive, isComputed,
  isDirty, watch, unwatch, dumpValue
};
