# 深拷贝
我们在日常开发过程中特别是在使用react || vue的时候会发现在数据管理上因为拷贝数据的问题导致各种问题

### 数据的类型
    js中我们日常开发中可以看到的数据类型大致可以分为两大类：
- 引用类型
    + object
- 基本类型
    + number string boolean null undefined symbol bigInit

基本类型是存储在栈内存中，引用类型是存储在堆内存中 但是堆内存中只保存了对象的指针

## js原生不支持深拷贝 Object.assign 和 {...obj} 都是属于浅拷贝 那么我们需要实现深拷贝

### 最简单的一种办法
JSON.stringify和JSON.parse 原理就是先将对象转换为字符串 再将字符串转为对象

缺点：
    不能复制function reg symbol 循环引用的会报错 相同引用的会被重复复制

    eg1:类型丢失问题
        let obj = {
            res: /^asd$/,
            fun: function(){},
            syb: Symbol('foo'),
            asd: 'asd'
        };
        let clone = JSON.parse(JSON.stringify(obj));
        console.log(clone)
        具体例子看1.js
        // 执行结果是：{ reg: {}, asd: 'asd' }
        // 为什么会出现问题：原因是JSON在执行字符串化的这个过程时，会先进行一个JSON格式化，
        //获得安全的JSON值，因此如果是非安全的JSON值，就会被丢弃掉。其中undefined、function、symbol这三种类型的值就是非安全的（包括该对象的属性循环赋值该对象），所以格式化后，就被过滤掉了，而set、map这种数据格式的对象，也并没有被正确处理，而是处理成了一个空对象。

    eg2:循环引用问题
        let data = {
            name: '测试',
            child: null
        }
        data.child = data
        let cloneData = JSON.parse(JSON.stringify(data));
        console.log(cloneData)
        // 此时将data的子元素赋值为 data 就会形成循环引用
        //Converting circular structure to JSON
        //  --> starting at object with constructor 'Object'
        //   --- property 'child' closes the circle
        //  at JSON.stringify (<anonymous>)
