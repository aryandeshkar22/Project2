// let arr=[1,8,6,8,3,2,6,12]
// let emp=[]
// for(let i=0;i<arr.length;i++){
//     if(!emp.includes(arr[i])){
//          emp.push(arr[i])
//     }
// }
// console.log(emp)


let ord=["th","st","nd","rd"]
for(let j=4;j<=20;j++){
    console.log(j+ord[0])
}
for(let i=21;i<=100;i++){
    if(i%10==1){
        console.log(i+ord[1])
    }
    else if(i%10==2){
        console.log(i+ord[2])
    }
    else if(i%10==3){
        console.log(i+ord[3])
    }
    else{
        console.log(i+ord[0])
    }

}
