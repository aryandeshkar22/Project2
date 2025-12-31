 function calDig(num)
{
    let digCount=0
    while(num!=0){
        digCount++
        num=Math.floor(num/10)
    }
    return digCount
}

function isArmstrong(num){
    let og=num
    let pow=calDig(num)
    let sum=0

    while(num!=0)
    {
        let ld=num%10
        sum=sum+(ld**pow)
        num=Math.floor(num/10)
    }
   return og==sum   
}

for(num=1;num<=1000;num++){
    if(isArmstrong(num)){
        console.log(num)
    }
}