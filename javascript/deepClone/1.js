// 类型丢失问题
let obj = {
    regdee: /^asd$/,
    fun: function(){},
    syb: Symbol('foo'),
    asd: 'asd'
};
let cloneObj = JSON.parse(JSON.stringify(obj));
console.log(cloneObj)
// 执行结果是：{ reg: {}, asd: 'asd' }
// 为什么会出现问题：原因是JSON在执行字符串化的这个过程时，会先进行一个JSON格式化，
//获得安全的JSON值，因此如果是非安全的JSON值，就会被丢弃掉。其中undefined、function、symbol这三种类型的值就是非安全的（包括该对象的属性循环赋值该对象），所以格式化后，就被过滤掉了，而set、map这种数据格式的对象，也并没有被正确处理，而是处理成了一个空对象。


// 循环引用问题
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

// es6 Object.assign(data, source1, source2)

let test = {  name: '张三' }
let data1 = { 
        a: 123,
        b: test
    }
let newData = Object.assign({},data1)
console.log(newData) 
// {  a: 123,  b: {    name: '张三'  }}
test.age = 18
console.log(newData)
// {  a: 123,  b: {    name: '张三',   age: 18  }}

// 只能对基本类型的值进行深拷贝 引用类型的值还是无法做到深拷贝

// 实现深拷贝

function deepClone(data) {
    // 1.不是对象和 是null 直接抛出错误提示
    if (typeof data !== 'object' || data === null) {
        throw new TypeError('基本类型数据')
    }

    // 2.创建一个空的对象来存储我们拷贝出来的数据
    let copyData = {};

    // 3.将我们传入的对象的所有的key都抽离出来 会返回一个以data中的key组成的数组
    let dataKeys = Object.keys(data);

    // 4.循环我们的key数组 也就是对象
    dataKeys.forEach(key => {
        // 获取到key所对应的value值
        const currentDataValue = data[key];
        // 如果是基本类型的值和函数 则直接拷贝

        if (typeof currentDataValue !== 'object' || currentDataValue === null) {
            copyData[key] = currentDataValue;
        } else if (Array.isArray(currentDataValue)) {
            // 实现数据的深拷贝
            copyData[key] = [...currentDataValue];
        } else if (currentDataValue instanceof Set) {
            // 实现set的拷贝
            copyData[key] = new Set([...currentDataValue]);
        } else if (currentDataValue instanceof Map) {
            copyData[key] = new Map([...currentDataValue]);
        } else {
            copyData[key] = deepClone(currentDataValue);
        }
    })
    return copyData;
}

let dataObj = {
    ary: [
        {
            age: 18,
            name: 'huhu'
        },
        2
    ],
    gender: 'male'
}
const newData1 = deepClone(dataObj);
console.log(newData1);

newData.ary.age = 0;
console.log(dataObj);
