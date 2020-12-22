function personal(a, b, c) {
    console.log(this.name);
}

let egg = {
    name: '学习call'
}

// 实现改变this指向的方法之call
Function.prototype.MyCall = function(context) {
    // context 是执行上下文环境
    context = context || window
    let fn = mySymbol(context)
    context[fn] = this
    // 给context 添加一个方法 指向this
    let arg = [...arguments].slice(1)
    // 将类数组 ——>转换为数组
    let res = context[fn](...arg)
    // 执行fn
    delete context[fn]
    // 删除方法避免内存泄漏
    return res;
}
//知识点：将类数组转换为数组
//1.[].slice.call(arguments)能将具有length属性的对象转换为数组
//[].slice === Array.prototype.slice;
//slice方法如果不传入参数的话会返回一个原数组的拷贝，通过call显示的绑定实现arguments变相的有了slice的方法

//2.Array.from()
//let arr = Array.from(arguments);

//3.扩展运算符
//let arg = [...arguments];

personal.MyCall(egg, '1', '2', '3');
