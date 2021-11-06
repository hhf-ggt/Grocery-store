let str = 'abcdfeadsafd'
// [a, b, c, d, f, e, ]
// 求出最长字串 如果没有找到、返回-1

function getMaxLen(str) {
    let left = 0
    let right = 0
    let len = str.length
    let set = new Set()
    let res = 0
    while(left < len) {
      while(right < len && !set.has(str[right])) {
        set.add(str[right])
        right++
      }
      res = Math.max(res, right - left)
      set.delete(str[left])
      left++
    }
    return res
}

console.log(getMaxLen(str))