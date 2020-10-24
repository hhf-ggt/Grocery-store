function selectSort(arr){
    for(let i = 0,len = arr.length; i < len; i++){
        let k = i;//用于存放当前循环中最小值得index 默认为循环初识值的index
        for(let j = i; j < len; j++){
            if(arr[j] < arr[k]){
                k = j;
            }
        }
        if(k !== i){
            swap(arr,i,k)//将最小值与当前循环的第一个值互换位置
        }
    }
    return arr;
}
