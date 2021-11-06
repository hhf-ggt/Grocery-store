/**
 * @desc 实现pow函数
 * @param { number, number }
 * @returns { number }
*/

// eg: pow(2, 3) ==>  8  2*2*2 
// 循环的形式去执行

function myPow(x, n) {
  let result = 1

  while(n) {
    result *= x
    n--
  }
  return result
}



function myPowDeep(x, n) {
  // 使用递归的时候一定要 搞清楚 推出循环的条件
  if (n === 1) {
    return x
  } else {
    return x * myPowDeep(x, n - 1)
  }
}


console.log(myPow(2, 3)) // 8
console.log(myPowDeep(2, 4)) // 16