Function.prototype.myApply = function(context) {
    context = context || window
    let fn = mySymbol(context)
    context[fn] = this
    let arg = [...arguments].slice(1);
    let res = context[fn](arg)
    delete context[fn]
    return res;
}