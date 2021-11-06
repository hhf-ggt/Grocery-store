function mut(n) {
  if (n <= 1) return n

  return n * mut(n-1)
}

// 循环法

function mutt(n) {
  let res = 1
  while(n) {
    res *= n
    n--
  }

  return res
}