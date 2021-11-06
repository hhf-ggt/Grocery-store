let arr = [1, 4, 5, 2, 10]
let target = 9

function sum(arr, target) {
  // 使用n平方的 形式去解答
  let result = [];
  for(let i = 0; i < arr.length; i++) {
    let val = arr[i]
    let res = target - val
    let index = arr.indexOf(res)
    if (index !== -1 && index !== i) {
      result = [index, i]
    }
  }
  return result
}

console.log(sum([1, 4, 5, 2, 10], 9))


// 如果给定的数组是已经排好序的

function sumTo (arr, target) {
  let l = 0
  let r = arr.length - 1

  while ( l < r ) {
    if (arr[l] + arr[r] > target) {
      r--
    } else if (arr[l] + arr[r] < target) {
      l++
    } else {
      return [l, r]
    }
  }
}

console.log(sumTo([1, 2, 3, 4, 5, 6]), 7)
