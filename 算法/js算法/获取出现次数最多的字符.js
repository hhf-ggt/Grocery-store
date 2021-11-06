let str = 'abcadefddeaaaschhjjkgfdsfdsaghee'
// 编写方法获取到出现次数最多的字符以及次数

// function getStrCount(str) {
//     let obj = {}
//     for (let i = 0; i < str.length; i++) {
//         let key = str[i]
//         if (key in obj) {
//             obj[key]++
//         } else {
//             obj[key] = 1
//         }
//     }
//     let maxCount = 0
//     let maxCountString = ''
//     for(let el in obj) {
//         if (obj[el] > maxCount) {
//             maxCount = obj[el]
//             maxCountString = el
//         }
//     }
//     return {
//         maxCount,
//         maxCountString
//     }
// }
// console.log(getStrCount(str))

function getStrCount(str) {
    let obj = new Map()
    for (let i = 0; i < str.length; i++) {
        let key = str[i]
        if (obj.has(key)) {
            let value = obj.get(key)
            obj.set(key, value += 1)
        } else {
            obj.set(key, 1)
        }
    }
    return Array.from(obj).reduce((prv, cur) => prv[1] < cur[1] ? cur : prv, [0, 0])
    // let maxCount = 0
    // let maxCountString = ''
    // for(let el in obj) {
    //     if (obj[el] > maxCount) {
    //         maxCount = obj[el]
    //         maxCountString = el
    //     }
    // }
    // return {
    //     maxCount,
    //     maxCountString
    // }
}
// console.log(getStrCount(str))

// 青蛙跳台阶

let x = function func(n) {
    if (n <= 1) {
        return 1
    } 
    if ( n === 2) {
        return 2
    }
    return func(n - 2) + func(n - 1)
}
func(5)
console.log(x)

let fib = function(n, prev=1, next=1) {
    if(n <= 2) {
        return next
    }
    return fib(n-1, next, prev + next)
}

console.log(fib(5))



var climbStairs = function(n) {
    let l = 0
    let r = 0
    let res = 1
    for(let i = 1; i < n; i++) {
        l = r
        r = res 
        res = l+r
    }
    return res
};