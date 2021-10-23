// 快速排序就是我们找到中间的一位之后取出来 然后拿这一项和数组中的每一项进行比较，如果比中间项小就push到一个数组，另外也是

let arr = [12, 2, 3, 5];

function quickSort(x) {
    let arr = x; 
    // 如果没有这个条件 则会报错内存溢出 因为递归一直进行没有办法停止
    if (arr.length <= 1) { return arr; }
    let point = Math.floor(arr.length / 2);
    let PointValue = arr.splice(point, 1)[0];
    let left = [];
    let right = [];
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] > PointValue) {
            right.push(arr[i])
        } else {
            left.push(arr[i])
        }
    }
    return quickSort(left).concat([PointValue], quickSort(right));
}
console.log(quickSort(arr));

// nlog(n)