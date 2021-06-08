### 实现new
- 这是一个老生常谈的问题
    + new 的过程主要是四步 1、创建一个新的对象 使用object.create() 2、将我你们创建的对象的__proto__ 指向构造函数 也就是constructor.prototype 实现原型链 3、让我们新的对象执行构造函数的方法 4、判断 执行构造函数的方法后 如果返回的是基本类型的值 则返回这个值 否则返回创建的对象

    // 构造函数 构造函数首字母都是大写
    function Dog(nam) {
        this.name = name
    }

    // 给构造函数原型上添加方法
    Dog.prototype.sayHi = function() {
        console.log('my name is' + this.name)
    }

    // 通过new 关键字 创建构造函数的一个新实例
    let dog = new Dog('hh')

    function myNew() {
        // 首先获取到构造函数
        let constructor = Array.prototype.shift.call(arguments)
        // 这里的args剩下的就是参数
        let args = arguments
        const obj = Object.create()
        // 构建原型链
        obj.__proto__ = constructor.prototype
        // 执行构造函数
        constructor.call(obj, ...args)
        // 返回
        return obj
    }
    
    简单的
    function _new(fn, ...args) {
        const obj = Object.create(fn.prototype)
        const result = fn.apply(obj, args)
        return result instanceof Object ? result : obj
    }


    ### 关于http2多路复用
    - 主要是解决性能问题
        + http 1.0 每一个请求都需要建立一个tcp连接 就是通过三次握手、四次挥手、这样开销很大，所以http1.1 增加了 keep-alive属性 就是多个请求可以公用一个链接 但是这样也会有一个问题就是 a请求和b请求 两个请求是会阻塞的 导致后面请求时间变长 因为http1.x传输内容是通过文本的方式、所以http2.0采用了多路复用的技术 就是改变了传输的内容改为了帧和流的形式 每一个帧都有标记是属于哪一个请求 这样子就可以解决阻塞的问题

    - 三次握手 四次挥手
    
