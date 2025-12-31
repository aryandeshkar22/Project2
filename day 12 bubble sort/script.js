let arr=[12,32,45,74,33,1]
console.log(arr)
let end=1
for(let i=0;i<=arr.length-end;i++){
    let p1=0
    let p2=p1+1
    while(p2<=arr.length-end){
        if(arr[p1]>arr[p2]){
            let temp=arr[p1]
            arr[p1]=arr[p2]
            arr[p2]=temp
        }
        p1++
        p2++
}
console.log(arr)
end++
}