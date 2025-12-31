// 19. There are two arrays with individual values. Write a JavaScript program to compute the sum of each individual index value in the given array.
// Sample array :
// array1 = [1,0,2,3,4];
// array2 = [3,5,6,7,8,13];
// Expected Output :
// [4, 5, 8, 10, 12, 13]

let arr1=[1,0,2,3,4,5,6,7,8,13,22]
let arr2=[3,5,6,7,8,13,22]
let result=[]
if(arr1.length>arr2.length){
    for(let i=0;i<arr1.length;i++){
        if(arr2[i]==undefined){
        arr2[i]=0
        }
        result.push(arr1[i]+arr2[i])
        
    
}
}
else if(arr1.length<arr2.length) {
    for(let i=0;i<arr2.length;i++){
        if(arr1[i]==undefined){
        arr1[i]=0
        }
       result.push(arr1[i]+arr2[i])
        
    }
    
}
// console.log(arr1)
console.log(result)

// 20. Write a JavaScript program to find duplicate values in a JavaScript array.

let arr=[1, 2, 3, 2, 4, 5, 4, 5]
let dup=[]
let count = 0

// 21. Write a JavaScript program to flatten a nested (any depth) array. If you pass shallow, the array will only be flattened to a single level.
// Sample Data :

// console.log(flatten([1, [2], [3, [[4]]],[5,6]]));
// [1, 2, 3, 4, 5, 6]
// console.log(flatten([1, [2], [3, [[4]]],[5,6]], true));
// [1, 2, 3, [[4]], 5, 6]

// 22. Write a JavaScript program to compute the union of two arrays.
// Sample Data :
a=[1,2,3]
b=[100,2,1,10]
c=[]
if(a.length<b.length){
    max=b.length
}
else{
    max=a.length
}
console.log(a+ " " + b)


// console.log(union([1, 2, 3], [100, 2, 1, 10]));
// [1, 2, 3, 10, 100]

// 23. Write a JavaScript function to find the difference between two arrays.
// Test Data :
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["3", "10", "100"]
// console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
// ["6"]
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["3", "10", "100"]

// 24. Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.
// Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
// Expected result : [15, -22, 47]