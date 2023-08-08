// const arr1 =[ 1, 3, 4, 5, 6, 7, 8, 9]

// const arr2 = arr1.silce=(3,5)
// console.log(arr2)


// const arr3 = arr1.splice(0,2)
// console.log(arr1)


// fromidx---------
// const arr1 = [1,4,5,6,4,2,7]
// const arr = arr1.indexOf(7,0)
// console.log(arr)


// join------
// const arr1 = ["n","i","t","u"]
// const arr = arr1.join("")
// console.log(arr)


// include--
// const arr1 =[24, 5,78,30,40]
// const arr = arr1.includes(40)
// console.log(arr)


// .short
// const arr1 = [4,3,5,7,8,9, 24,2,5,87,56,43,12]
// const arr2 = arr1.sort((a,b)=> a-b)
// console.log(arr2)
// const arr = arr1.sort((a,b) => b-a)
// console.log(arr)

// const newArray = ["dfgh","asdfgh","buysdgwhj","nbjhayouwh","poiuyt"].sort((a,b) =>{
//     if (a > b){
//         return 1;
//     }else if(b>a){
//         return -1;
//     }else{
//         return 0
//     }
// });
// console.log(newArray)

// .filter haar ek baar new arr return krta hai 
// const arr =[1,5,6,4,2,7,3,4,5,6,7]
// const newarr = arr.filter((value) => value > 4)
// console.log(newarr)

// .map
// const arr =[1,3,2,4,5,2,4,]
// const newarr = arr.map((val) => val
// console.log(newarr) *2)

// const newarr = arr.map((ele) => {
//     return ele > 1 ? ele : '';
// })
// console.log(newarr)

// .foreach

// const arr = [4,7,8,3,1,5,7,1,3,9,]
//  arr.forEach((value) =>  value *3)
// console.log(arr)

// .find
// const arr = [5 ,2,3,4,6,8,1,9]
// const newarr = arr.find((ele) => ele > 6)
// console.log(newarr)
// const newarr = arr.findLast((ele) => ele > 6)
// console.log(newarr)


// .findindex

// let arr =[1,3,4,2,5,6,7,8,9]
// let greaterNum = arr.findIndex((ele) => ele > 3)
// console.log(greaterNum)

// findlastindex
// let arr =[1,2,3,4,5,6,7]
// let last = arr.findLastIndex((ele) => ele > 8)
// console.log(last)

// .some
// let arr = [1,2,4,5,7,3,5,8,]
// let greaterNum = arr.some((ele) => ele > 5)
// console.log(greaterNum)

// .every
// let arr = [2,34,5,2,12,10,15]
// let greaterNum = arr.every((ele) => ele > 2)
// console.log(greaterNum)

// .reverse 
// let arr = [1,23,45,36,23,11,22,]
// let greaterNum = arr.reverse()
// console.log(greaterNum


// .flat
// let arr = [23,12,45,23,[23,23,45,[11,65,],34,56,],23,12,56,80]
// let arr1 = arr.flat()
// let arr2 = arr.flat(2)
// console.log(arr1,arr2)


// .flatMap
// let arr = [12,[2,[32,11,10,],12],34,4,[2,13,12],24]
// let arr1 = arr.flatMap((ele) => {
//     if (typeof ele === "number"){
//         return ele**2;  
//     } else {
//         return ele
//     }
// }); 
// console.log(arr1)


const studentDetails =[ { name: 'niut', marks: 78},
{ name: 'adi', marks: 55},
{ name: 'naina', marks: 25},
{ name: 'ansh', marks: 70},
{ name: 'arzoo', marks: 58},
{ name: 'sanaya', marks: 12},
{ name: 'priya', marks: 8}
]

let newStudentDetails = []

 studentDetails.forEach((student) => {
    if (student.marks > 30){
        newStudentDetails.push({
            name: student.name,
            marks: student.marks,
            status:"pass"
        });
    }else {
        newStudentDetails.push({
            name: student.name,
            marks: student.marks,
            status:"fail",
            falingMark: 30 - student.marks
        })
    }
    
}); 
console.log(newStudentDetails)

   

