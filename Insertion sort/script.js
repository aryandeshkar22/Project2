// arr=[19,34,21,13,67,12]
// for (let i = 1; i < arr.length; i++) {
//     let key = arr[i];
//     let j = i - 1;
    
//     while (j >= 0 && arr[j] > key) {
//         arr[j + 1] = arr[j];
//         j--
//     }
//     arr[j + 1] = key;
// }
// console.log(arr)



let arr1=[21,4,64,2,7,32]
for(let f=1;f<arr1.length;f++){
    let e=arr1[f]
    let j=f-1
    while(j>=0 && arr1[j]>e){
        arr1[j+1]= arr1[j]
        j--        
    }
    arr1[j+1]=e
}
console.log(arr1)