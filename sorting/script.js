// que1   you have an unsorted array [6,8,11,9,3,5,15,1]

// let arr = [2,4,5,6,7,8,9,10,11,12,13,14]
// function newArrShort(arr){
//     let first = 0,second = 1;
//     const resultArr =[]
//     while(first <= arr.length && second <= arr.length){
//       const mergedArr=mergedsort(arr[first],arr[second])
//       console.log({mergedArr})
//       resultArr.push(mergedArr)
//       console.log(first,second)
//       if(first === arr.length-1){
//         resultArr.push(arr[first])
//         return resultArr;
//       }
//       if(second === arr.length -1){
//         return resultArr    
//       }
//       first +=2;
//       second +=2;
//     }

       
// }
// console.log(newArrShort(arr))

const arr2 = [1,2,3,4,5,6,7,8]
for (let i = 0; i<arr2.length; i+=2){
    let j=i+1;
    console.log({i:arr2[i],j:arr2[j]})
}