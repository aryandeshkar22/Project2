// let mat=[["a","b","c","p","s"],
//          ["d","e","f","q","t"],
//          ["g","h","i","r","u"],
//          ["j","k","l","y","v"]
//         ]
// // expected output: d g j k l y r q p c b a
// let str=""

// //  pattern : Z, ulta Z, N, ulta N, P,Diamond

// // Ulta Z :

// for(let i=0;i<=mat.length-1;i++){
//         console.log(mat[i][i])
// }



let arr=[
        ["a","b","c","d","e"],
        ["f","g","h","i","j"],
        ["k","l","m","n","o"],
        ["p","q","r","s","t"],
        ["u","v","w","x","y"]
]
let rowStart=0
let rowEnd=Math.floor((arr.length-1)/2)

let colStart=Math.floor((arr[0].length-1)/2)
let colEnd=arr[Math.floor((arr.length-1)/2)].length-1

while(rowStart<=rowEnd && colStart<=colEnd){
        console.log(arr[rowStart][colStart])
        rowStart++
        colStart++
}

rowStart=Math.floor((arr.length-1)/2)
rowEnd=Math.floor(arr[arr.length-1]/2)

colStart