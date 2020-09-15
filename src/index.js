import { Ref } from './Ref.mjs';
import { Reactive } from './Reactive.mjs';

function isRef(r) {
  return r.hasOwnProperty('_ref') && r._ref === r;
}

function isReactive(r) {
  if (r._reactive)
    if (r._reactive.obj === r)
      return true;

  return false;
}

function watch(r, func) {
  if (isRef(r)) {
    return r.watch(func);
  }
  if (isReactive(r)) {
    if (!r._reactive._subs.includes(func)) {
      r._reactive._subs.push(func);
    }
    return;
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

export { Ref, Reactive, ref, reactive, isRef, isReactive, watch, unwatch };
