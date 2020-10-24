// 打扑克的方法
// 先抓一张 之后在抓一张开始比较 

let arr = [ 2, 4, 3, 12, 7];

function inertSort(arr) {
    // 这个就是我们最后排号顺序的数组
    let handle = Array.of(arr[0]);
    // 取出我们数组中的第一项作为比较的对象


    // 之后我们从第二项开始循环与我们手的进行比较 如果小 则插入到前面 如果大 则插入到后面

    for(let i = 1; len = arr.length, i < len; i++) {
        let A = arr[i];
        // 数组长度减1是获取到数组的最后一项 我们习惯从后面向前面比
        for(let j = handle.length - 1; j >= 0; j--) {
            let B = handle[j];
            if ( A > B) {
                // splice 中的参数是 将A插入到第一个参数的前面
                handle.splice(j+1, 0, A);
                break;
            }
            // 如果前面没有东西了 那么也就是直接插入进去
            if(j === 0) {
                handle.unshift(A)
            }
        }
    }
    return handle;
}

console.log(inertSort(arr));