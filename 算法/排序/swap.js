function swap(arr,i,j){
    //[arr[i],arr[j]] = [arr[j],arr[i]];
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
