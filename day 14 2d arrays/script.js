
// //         0   1   2  
// let arr=[["a","b","c"], //0
//          ["d","e","f"], //1
//          ["g","h","i"]] //2
    
// // for(let i=0;i<=arr.length-1;i++){
// //     for(let j=0;j<=arr[i].length-1;j++){
// //         console.log(arr[i][j])
// //     }
// // }

// for (let i=0;i<=arr.length-1;i++){
//     for(let j=0;j<=arr.length-1;j++){
//         console.log(arr[j][i])
//     }
// }
// // output: a d g m b e h n c f i o j k l p
// console.log("-----------------------------------------")

// for(let i=0;i<=arr.length-1;i++){
//     for(let j=arr.length-1;j>=0;j--){
//         console.log(arr[j][i])
//     }
// }
// console.log("-----------------------------------------")



        // 0   1   2   3
let arr=[["a","b","c","j"], //0
         ["d","e","f","k"], //1
         ["g","h","i","l"], //2
         ["m","n","o","p"]  //3
        ] 
console.log("--------------")
for(let q=arr.length-1;q>=0;q--){
    for(let r=arr.length-1;r>=0;r--){
        if(arr[q]==arr[r]){
            console.log(arr[q][r])
        }
}
} //output: p i e a

console.log("--------------")
d=0
for(let k=arr.length-1;k>=0;k--){
    console.log(arr[k][d])
    d++
}  //output: m h f j











