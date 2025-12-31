// strong numbers:A strong number is a positive integer where the sum of the 
// factorials of its individual digits is equal to the original number

// program to check if a number is strong or not
// function calFact(num){
//     let fact=1
//     for(let i=1;i<=num;i++){
//         fact=fact*i
//     }
//     return fact
// }
// function strong(num) {
//     let og=num
//     let sum=0
//     while(num!=0){
//         let ld=num%10
//         sum=sum+calFact(ld)
//         num=Math.floor(num/10)
//     }
//     if(og==sum){
//         console.log(sum+ " is a strong number")
//     }
//     else{
//         console.log(sum+ " is not a strong number")
//     } 
// }
// strong(145)


// program to print strong numbers from 1 to n
// function fact(num){
//     let fact=1
//     for(let i=1;i<=num;i++){
//         fact=fact*i
//     }
//     return fact
// }
// function isStrong(num){
// let og=num
// let sum=0
// while(num!=0){
//     let ld=num%10
//     sum=sum+fact(ld)
//     num=Math.floor(num/10)
// }
// return sum==og
// }
// for(let num=1;num<=100000;num++){
//     if(isStrong(num)){
//         console.log(num)         
//     }
// }

// perfect number: A perfect number is a positive integer that is equal to 
// the sum of its proper positive divisors
// program to check if a number is perfect or not
// let num = 28
// let sum = 0 
// for(let i=1;i<=Math.floor(num/2);i++){
//     if(num%i==0){
//         sum=sum+i
//     }
// }
// if (sum==num){
//     console.log(num + " is a perfect number");
// }
// else{
//     console.log(num + " is not a perfect number")
// }


// prpgram to print perfect numbers from 1 to n]
let num=28
let og=num
let sum=0
for(let i=1;i<=Math.floor(num/2);i++){
    if(num%i==0){
        sum=sum+i
}
}
if(sum==og){
    console.log(og + " is a perfect number")
}
else{
    console.log(og+ " is not a perfect number")
}


// Write a  program to print Fibonacci series up to n terms.

function fibo(n){
let a=0
let b=1
while(a<=n){
console.log(a)
temp=a+b
a=b
b=temp
}
}
fibo(1600)

// fibonacci code
let count=10
let n1=0
let n2=1
console.log(n1)
console.log(n2)
for(let i=0;i<=count-2;i++){
    n3=n1+n2
    console.log(n3)
}