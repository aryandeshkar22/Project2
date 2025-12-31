//  wap to get hcf of a numbers
// a=21
// b=75
// while(a!=b)
// {
//     if(a>b)
//     {
//         a=a-b
//     }
//     else
//     {
//         b=b-a
//     }
// }
// console.log(a)

// wap to get lcm of a numbers

a = 8
let i = 1
a1=a

b = 12
let j = 1
a2=b
while(a1!=a2){
    if(a1<a2)
    {
        i++
        a1=a*i
    }
    else{
        j++
        a2=b*j
    }
}
console.log(a2)