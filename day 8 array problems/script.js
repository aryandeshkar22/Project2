// let arr1=[14,64,74,22,12,89]
// let clone=[]
// for(let i=0;i<=arr1.length-1;i++){
//     clone[i]=arr1[i]
// }
// console.log(arr1)

// console.log(clone)

// clone[1]="No"

// console.log(arr1)

// console.log(clone)


// copy an array
// function arr_clone(arr){
// let copy=[]
// for(let i=0;i<arr.length;i++){
//     copy[i]=arr[i]
// }
//     return copy
// }
// let clone=arr_clone([1,2,3,4,5,6,7,8])
// console.log(clone)



// reverse an array
function rev_array(arr){
    let rev=[]
    let j=0
    for(let i=arr.length-1;i>=0;i--){
        rev[j]= arr[i]
        j++
    }
    return rev
}
let a=rev_array([1,2,3,4,5,6,7,8])
console.log(a)

// Write a JavaScript function to get the first element of an array. 
// Passing the parameter 'n' will return the first 'n' elements of the array.
// Test Data :
// console.log(first([7, 9, 0, -2]));
// console.log(first([],3));
// console.log(first([7, 9, 0, -2],3));
// console.log(first([7, 9, 0, -2],6));
// console.log(first([7, 9, 0, -2],-3));
// Expected Output :
// 7
// []
// [7, 9, 0]
// [7, 9, 0, -2]
// []

function first(arr,count){
let ans=[]
if(count==undefined)
{
    return arr[0]
}
else{
    let end;
    if(count>arr.length){
        end=arr.length
    }
    else{
        end=count
    }
    for(let i=0;i<=end-1;i++){
        ans.push(arr[i])
    }
    return ans
}
}
console.log(first([7, 9, 0, -2],6))

// 4. Write a JavaScript function to get the last element of an array. 
// Passing the parameter 'n' will return the last 'n' elements of the array.
// Test Data :
// console.log(last([7, 9, 0, -2]));
// console.log(last([7, 9, 0, -2],3));
// console.log(last([7, 9, 0, -2],6));
// Expected Output :
// -2
// [9, 0, -2]
// [7, 9, 0, -2]

function last(arr,count){
    let an=[]
for(let i=arr.length-1;i>=0;i--){
    if(count==undefined){
        return arr[arr.length-1]
    }
}
    
}
