// linear search

// let arr = [2,4,5,4,2,6]
// function linear(arr,serchvalue){
    
//     for(let i = 0; i < arr.length; i++){
//         if(serchvalue === arr[i]){
//             return  i;
//         }
//     }
//     return -1;
// }
// console.log(linear(arr,5))

// binary search
let arr = [1,2,3,4,5,6,7,5,7,8,9,12,3]
function binary(arr,serchvalue){
  let left = 0;
  let right = arr.length-1;
  let mid = Math.floor((left+right)/2);
  while (arr[mid] !== serchvalue && left <= right) {
    if(arr[mid] < serchvalue){
        left = mid +1;
    }else{
        right = mid;
    }
    mid = Math.floor((left+right)/2)
  }

  if (arr[mid]=== serchvalue){
    return mid;
  }

  return -1;

}
console.log(binary(arr,15))
