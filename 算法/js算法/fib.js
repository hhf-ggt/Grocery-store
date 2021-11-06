// var climbStairs = function(n) {
//   let l = 0
//   let r = 0
//   let res = 1
//   for(let i = 1; i < n; i++) {
//       l = r
//       r = res 
//       res = l+r
//   }
//   return res
// };

// var climbStairs = function(n) {
//   // if (n <= 1) return 1
//   // if (n === 2) return 2
//   let res = [0, 1, 2, 3]
//   let i = 2
//   while(i <= n) {
//     res[i] = res[i - 1] + res[i - 2]
//     i++
//   }
//   return res[n]
// };
// console.log(climbStairs(4))

// 0 1 1 2 3 5 8 13 21 34  55

// 解法1

function fib(n) {
  if ( n <= 0) return 0
  if (n > 0 && n <= 2) return 1
  return fib(n- 1) + fib(n- 2)
}
// 这个是有规律可以找的、我们这里使用的递归的算法


// console.log(fib(0))
// console.log(fib(3))
// console.log(fib(5))

// 2、使用动态规划来解决这个问题、 就是求 n位的值的时候 将这个值拆解为 n-1 n-2 的和
// 这个的时间复杂度 和空间复杂度都是 o(n) 我们可以优化为空间复杂度 不需要将每次的结果豆记录下来
function dp (n) {
  let dp = [0, 1]
  for (let i = 0; i < n; i++) {
    dp[n] = dp[n-1] + dp[n-2]
  }
  return dp[n]
}




