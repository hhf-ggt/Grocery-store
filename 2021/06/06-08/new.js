function Dog(name) {
    this.name = name
    return {
        age: name
    }
}

// 给构造函数原型上添加方法
Dog.prototype.sayHi = function() {
    console.log('my name is' + ' ' + this.name)
}

function _new(fn, ...args) {
    const obj = Object.create(fn.prototype)
    console.log(obj)
    const result = fn.apply(obj, args)
    return result instanceof Object ? result : obj
}

//let dog1 = new Dog('hh')
//console.log(dog1.sayHi())

let dog2 = _new(Dog, 'ff')
console.log(dog2.sayHi())