let arr = [1,2,3,4,5,6,7,8,9]

function myRedce(arr,cb) {
    let newarr = []
    for(let i = 0; i < arr.length; i++){
        let temp = cb(arr[i],i,arr)
        newarr.push(temp)
    }
    return newarr
}
let result = myRedce(arr,function(value,index,array){
    return value + 2
})
console.log(result);



console.log(arr.join(' '));

