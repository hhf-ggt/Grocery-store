// [1, 3, 4, 2]
// function insertionSort(arr) {
//   var len = arr.length;
//   var preIndex, current;
//   for (var i = 1; i < len; i++) {
//       preIndex = i - 1;
//       current = arr[i];
//       while(preIndex >= 0 && arr[preIndex] > current) {
//           arr[preIndex+1] = arr[preIndex];
//           preIndex--;
//       }
//       arr[preIndex+1] = current;
//   }
//   return arr;
// }


function isertSort (arr) {
  let len = arr.length
  let prvIndex, current

  for(let i = 1; i < len; i++) {
    prvIndex = i - 1
    current = arr[i]
    while(prvIndex >= 0 && arr[prvIndex] > current) {
      arr[prvIndex+1] = arr[prvIndex]
      prvIndex--
    }
    arr[prvIndex + 1] = current
  }

  return arr
}

console.log(isertSort([2, 1, 4, 3, 90, 23]))

// 时间复杂度、最好的情况就是升序是O(n) 最坏和平均 都是O(N^2)