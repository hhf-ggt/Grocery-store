// 给定由一些正数（代表长度）组成的数组 A，返回由其中三个长度组成的、面积不为零的三角形的最大周长。
// 如果不能形成任何面积不为零的三角形，返回 0。

let arr = [1, 4, 2, 7, 25, 17, 14]

// 组成三角形的条件是、任意两边之和大于第三边
// 首先我们将这个数组 排个序

// 时间复杂度 nlogn
function quickSort(arr) {
  if (arr.length <= 1) return arr
  let left = []
  let right = []
  let midIndex = Math.floor(arr.length / 2)
  let midVal = arr.splice(midIndex, 1)[0]
  for(let i = 0; i < arr.length; i++) {
    if (arr[i] > midVal) right.push(arr[i])
    if (arr[i] < midVal) left.push(arr[i])
  }
  return quickSort(left).concat(midVal, quickSort(right))
}

let newArr = quickSort(arr)

function triangle (arr) {
  let newArr = quickSort(arr)
  // 满足组成三角形的条件 a + b > c
  // 我们找最大的边 然后在找到另外两条就可以得到一个最大周长的三角形
  for(let i = newArr.length - 1; i >=2; --i) {
    if (newArr[i - 1] + newArr[i - 2] > newArr[i]) {
      console.log(newArr[i], newArr[i - 1], newArr[i - 2] )
      return newArr[i] + newArr[i - 1] + newArr[i - 2] 
    }
  }
  return 0
}

console.log(triangle(arr))