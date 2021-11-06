// 二分法的前提是需要有一个排好序的数组
// let arr = [1, 2, 3, 4, 5, 6, 7]

let arr2 = [2, 4, 6, 7]

// mid = left + (right - left)
// 输入7

// 1、找出数组中的mid 4 
// 2、值是 5

// left 0 right = 7 mid = 4 val = 5 targer = 7

// val小于7 取右区间 [6, 7, 8]

// left 5 right 7 mid = 1 midvalue = 7 target = 7





// 时间复杂度 O(logn)

// 设置左边界和右边界

// console.log(middleValue)

function dic (arr, num) {
  let left = 0
  let right = arr.length
  while (left < right) {
    let mid = Math.floor((right - left) / 2 + left)
    let middleValue = arr[mid]
    console.log(mid, middleValue)
    if (middleValue < num) {
      left = mid + 1
    } else if (middleValue > num) {
      right = mid - 1
    } else {
      return mid
    }
  }
  return -1
}

console.log(dic(arr2, 7))




// log(x) = n

// x = logn
