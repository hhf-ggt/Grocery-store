function deepClone(data, has = new WeakMap()) {
    // 1.不是对象和 是null 直接抛出错误提示
    if (typeof data !== 'object' || data === null) {
        throw new TypeError('基本类型数据')
    }
    // 解决循环引用问题

    if(hash.has(data)) {
        return hash.get(data)
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

newData1.ary.age = 0;
console.log(newData1);
console.log(dataObj);



// 结局循环引用问题
function deepCopy(data, hash = new WeakMap()) {
    if(typeof data !== 'object' || data === null){
          throw new TypeError('传入参数不是对象')
      }
    // 判断传入的待拷贝对象的引用是否存在于hash中
    if(hash.has(data)) {
          return hash.get(data)
      }
    let newData = {};
    const dataKeys = Object.keys(data);
    dataKeys.forEach(value => {
       const currentDataValue = data[value];
       // 基本数据类型的值和函数直接赋值拷贝 
       if (typeof currentDataValue !== "object" || currentDataValue === null) {
            newData[value] = currentDataValue;
        } else if (Array.isArray(currentDataValue)) {
           // 实现数组的深拷贝
          newData[value] = [...currentDataValue];
        } else if (currentDataValue instanceof Set) {
           // 实现set数据的深拷贝
           newData[value] = new Set([...currentDataValue]);
        } else if (currentDataValue instanceof Map) {
           // 实现map数据的深拷贝
           newData[value] = new Map([...currentDataValue]);
        } else { 
           // 将这个待拷贝对象的引用存于hash中
           hash.set(data,data)
           // 普通对象则递归赋值
           newData[value] = deepCopy(currentDataValue, hash);
        } 
     }); 
    return newData;
}