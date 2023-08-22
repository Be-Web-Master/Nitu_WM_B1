// que1 Count the occurrences of a value in an array
// — create a function that takes 2 args: arr, value
// — this function returns a number, that is count of number of times the value has appeared in arr

// let arr =[14,12,13,15,16,17,18,12,14,12]
// function count (arr,value){
//    let count = 0
//    for (let i=0;i<arr.length; i++){
//    if(arr[i]===value){
//    count++;
//    }
// }
// return count;
// }
// console.log(count(arr,12))



// que2 Get indices of all occurrences of a value in an array (almost polyfill of Array.prototype.findIndex)
// — create a function that takes 2 args: arr, value
// — this function returns a an array of numbers, where each number is the index position of the value in arr

// let arr =[12,13,14,5,6,2,3,45,12,2,4,12]
// function count (arr,value){
// let count = 0;
// let index;
// for (let i=0;i<arr.length;i++){
//     if(arr[i]===value){
//         count++;
//         index=i
//     }
//     return{count,index}
// }
// }
// console.log(count(arr,12))

//que3 Get the unique values of an array
// — create a function that takes 2 args: arr
// — this function returns a new array of values from arr, only those which occur only once in that array

// let arr = [10,12,13,12,10,12,10,11,1,11,12,10]
// function unique(arr){
//     let obj=[];
//     arr.forEach(element => {
//         if(!obj.includes(element)){
//             obj.push(element);
//         }
        
//     });
//     return obj;
// }
// console.log(unique(arr))


// que4 Compare two Arrays (polyfill of Array.prototype.every)
// — create a function that takes 2 args: arr1, arr2
// — this function returns either true or false, if each element of both the arrays are equal with ===
// let arr1 = [1,2,3,4,5,6,7]
// let arr2 = [1,2,3,4,5,6,7,88]
// function compare(arr1,arr2){
//     let check = true;
//     for(let i = 0; i<arr1.length;i++){
//         if(arr1.length !== arr2.length){
//             check = false
//         }
//         if (arr1[i] !== arr2[i]) {
//             check = false
//         }
//         // return true;
        
//     }
//     return check;
// }
// console.log(compare(arr1,arr2))


// que5 Create an array of numbers in the given range
// — create a function that takes 3 args: startNum, endNum, steps
// — this function returns an array which has numbers from startNum, to endNum in steps.

// function number (startNum,endNum,step){
//     let arr =[];
//     for(let i = startNum; i<endNum; i+=step){
//         arr.push(i);
//     }
//     return arr;
// }
// console.log(number(5,100,5))

// que6 Convert an array of objects to a single object of objects
// — create a function that takes 2 args: arran array of objects, keyName
// — this function returns an object: where value of one of the properties of the object is the key, and the entire object is the value.

