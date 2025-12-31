// Write a javascript program that accepts a number as input & insert dashes(-)
// between each even number.For example if you accept 425468 the output should be
// 4-254-6-8

function evenDash(num){
let result=""
while(num!=0){
    let ld=num%10
    let sld=Math.floor((num%100)/10)
    if(isEven(ld)&&isEven(sld)){
        {
            if(num<=9){
                result=result+ld
            }
            else{
                result=result+ld+"-"
            }
        }
    }
    else{
        result=result+ld
    }
num=Math.floor(num/10)
}
console.log(result.split("").reverse().join(""))
function isEven(num){
    if (num%2==0){
        return true
    }
    else{
        return false
    }
}
}

evenDash(425468)


// Write a simple JavaScript program to join all elements of the following 
// array into a string.
// Sample array : 
// myColor = ["Red", "Green", "White", "Black"];
// Expected Output :
// "Red,Green,White,Black"
// "Red,Green,White,Black"

let myColor=["Red", "Green", "White", "Black"]
let str=""
for(let i=0;i<=myColor.length-1;i++){
    str=str+myColor[i]+","
}
console.log(str)


let fruits=["apple","banana","chiku","gava","papaya","pineapple","kiwi","watermelon"]

let st=""
let char="$"
for(let i=0;i<=fruits.length-1;i++)
{
   if(i==fruits.length-1)
   {
         st=st+fruits[i]
   }else{
         st=st+fruits[i]+char
   }

    //   str=str+char+fruits[i]
}

console.log(st)

console.log(fruits.join("@"))



//  Write a JavaScript program to sort the items of an array.
// Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// // Sample Output : -4,-3,1,2,3,5,6,7,8


let arr=[1,7,8,9,4,5,2,3,7,11,77,12,99,55,44,34,111,222]
console.log(arr.sort(
    function(a,b){ //this is called as callback function 
                   //also called as anonymous function
        return a-b
   }
))
console.log(arr.sort(
    function(a,b){
    return b-a
    }
))
console.log(arr)




let abc="ifbiaubiaasipupuibpiuabipubiaubani[ha[oinoia[io0h8auabiuj"

console.log(abc.split("a"))



let para="Indias equity mutual fund inflows rebound in November on strong earnings, low inflation"

// console.log(para.split(" "))

// to find "on" is available in string or not 
let xyz=para.split(" ")
if(xyz.includes("of"))
{
    console.log("element is present ")
}else{
    console.log("element is not present")
}
