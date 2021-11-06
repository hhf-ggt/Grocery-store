// 前两项之和等于后面一项
// 0 1 1 2 3 5 8 .. n-1 n (n - 1 + n)


// 递归的形式
// 获取第n位数字

function fib(n) {
  // 跳出递归的条件
 if (n <= 1) return n

  return fib(n - 1) + fib( n - 2)
}

fib(5)