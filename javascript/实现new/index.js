// 我们先写一个构造函数
function Personal(name) {
    this.name = name;
}

// 如果我们要创建一个Personal的实例
let personal = new Personal('huhufen');
console.log(personal.name);
// 这里我们可以打印出来huhufeng


// 那么我们自己想实现一个new 该怎么实现呢
// 1.创建一个新的对象
// 2.将对象的构造函数绑定在传入构造函数上
// 3.改变this指向
// 4.返回对象或者自身

function Person(name) {
    this.name = name;
}

function mockNew() {
    // 创建一个空对象
    let resultObj = new Object();
​
    // 取传入的第一个参数，即构造函数，并删除第一个参数。
    // 关于为什么要用 Array.prototype.shift.call 的形式，见之前的博客文章 《JavaScript之arguments》
    let constructor =  Array.prototype.shift.call(arguments);
    // 传入进来的构造函数
    
    // 类型判断，错误处理
    if(typeof constructor !== "function") {
        throw("构造函数第一个参数应为函数");
    }
    
    // 绑定 constructor 属性
    resultObj.constructor = constructor;
    // 相当于personal.constructor = Personal
    
    // 关联 __proto__ 到 constructor.prototype
    resultObj.__proto__ = constructor.prototype;
    // 这里相当于 resultObj.__proto__ = Personal.prototype
    
    // 将构造函数的 this 指向返回的对象
    constructor.apply(resultObj, arguments);
    // 把resultobj挂载到Personal
    
    // 返回对象
    return resultObj;
}