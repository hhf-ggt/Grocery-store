// 递归有一个问题就是会出现爆栈
// 比如我们去计算func(5) 则依赖 func(4) + func(3) 
// func(4) func(3) + func(2) 
// func(3) func(2) + func(1)
// func(2) func(1) func(1) 2 


/**
 * 使用尾递归来解决 阶乘问题
 * 传入两个参数、不用对上层的调用进行保存
*/

function mut (n, sum) {
  if (n === 1) return sum
  return mut(n - 1, n * sum)
}

// console.log(mut(5, 1))



// 尾递归实现 斐波那契数列

function fib (n, n1, n2) {
  if (n === 0) {
    return n1
  }
  return fib(n - 1, n2, n1 + n2)
}

console.log(fib(1, 0, 1))
// 0 1 1 2 3 5 8