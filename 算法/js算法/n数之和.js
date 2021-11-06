// 求n数之和

// 公式法
function sum(n) {
  return ((1 + n) * n) / 2
}

// 循环法
function sunN(n) {
  let res = 0
  while(n) {
    res += n
    n--
  }
}
// o(n)
console.log(sum(5))
// 1 + 2 + 3 + 4 + 5