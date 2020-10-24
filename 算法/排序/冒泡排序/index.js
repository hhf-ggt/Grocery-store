// 快速排序的原理就是从数组的第一位开始找 左右两个数据进行比较大小，如果左边的比 右边的数据大 那么就交换位置，每次执行完
// 这样一组的时候将数组中最大的交换到最后面
// 之后递归进行就可以得到最后的结果
// 所以需要执行 n-1轮 最差的情况


let arr = [911, 211, 456, 678];
function maopao(arr) {
    let temp;
    // 进行存储中间变量以便交换位置的时候用
    for(let i = 0; i < arr.length - 1; i++) {
        for(let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j+1]) {
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}
console.log(maopao(arr));