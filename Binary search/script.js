let arr=[1,2,3,5,8,10,12,15,19]
let search=10
let p1=0
let p2=arr.length-1
let mid=Math.floor(arr.length-1)/2


while(p1 <= p2){
    if(search<=arr[mid]){
        p2=mid

    if(arr[p1]==search){
        console.log(arr[p1])
    }
    else if(arr[p2]==search){
        console.log(arr[p2])
    }
    }
    else{
        p1=mid
    
    if(arr[p1]==search){
        console.log(arr[p1])
    }
    else if(arr[p2]==search){
        console.log(arr[p2])
    }
    }


    }

