// 输入：[1,8,6,2,5,4,8,3,7]
// 输出：49 
// 解释：图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。

// 时间复杂度 O(n)
let arr = [1,8,6,2,5,4,8,3]
function maxArea(arr) {
  let res = 0
  let left = 0
  let right = arr.length - 1
  while(left < right) {
    let minHeight = Math.min(arr[left], arr[right])
    let area = minHeight * (right - left)
    res = Math.max(res, area)

    // 这里是left增加还是right减少
    if (arr[left] < arr[right]) {
      left++
    } else {
      right--
    }
  }
  return res
}

console.log(maxArea(arr))