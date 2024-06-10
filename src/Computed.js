class Computed {
  constructor(_context, _exprFunc, _name, _options) {
    if (_context && !_exprFunc) {
      // if only one parameter is passed in, assume it's the expression function in a lambda
      _exprFunc = _context;
      _context = { }
    }
    if (!_context) _context = { };

    this._exprFunc = _exprFunc;
    this._context = _context || {}
    this._name = _name
    this._options = _options
    this._computed = this;  // self-reference for identification and validity checking
  }

  get value () {
    return this._exprFunc.call(this._context, this._context);
  }

  set value (val) {
    throw Error('Computed values cannot be assigned.')
  }
}

export { Computed };
