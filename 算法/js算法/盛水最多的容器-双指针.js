// 输入：[1,8,6,2,5,4,8,3,7]
// 输出：49 
// 解释：图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。

let arr = [1,8,6,2,5,4,8,3,7]
function maxArea(arr) {
  let res = 0
  for (let i = 0, j = arr.length - 1; i < j;) {
    let minHeight = arr[i] < arr[j] ? arr[i++] : arr[j--]
    let area = (j - i + 1) * minHeight
    res = Math.max(res, area)
  }
  return res
}

console.log(maxArea(arr))