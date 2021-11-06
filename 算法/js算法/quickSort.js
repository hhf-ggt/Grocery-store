let arr = [1, 5, 3, 2]
function quickSort(arr) {
if (arr.length <= 1) return arr
  let index = Math.floor(arr.length / 2)
  let mid = arr.splice(index, 1)[0]
  let left = []
  let right = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < mid) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }

  return quickSort(left).concat(mid, quickSort(right))
}