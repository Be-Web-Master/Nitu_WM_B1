
// LIst all the keys of the given Object.

// const studentObj = {
//     name: 'nitu kumari',
//     rollNumber: 24,
//     calss: 10,
//     section: 'A',
//     gender: 'Female',
//     country: 'india'
// }
// console.log(Object.keys(studentObj));

// console.log(Object.values(studentObj));



// list all the keys and value of the given object in the form of array
// const studentObj = {
//     name: 'nitu kumari',
//     rollNumber: 24,
//     calss: 10,
//     section: 'A',
//     gender: 'Female',
//     country: 'india'
// }

// console.log(Object.entries(studentObj));


// merge all of these object and create a single object using object method.

// const obj1 = {name:'nitu',gender:'Fmale'};
// const obj2 = {section:'A',gender:'Female'};
// const  obj3 ={country:'India'}

// console.log(Object.assign(obj1,obj2,obj3));


// create an object which have properties name and one method printstudentdetail,create another object and using.create method,add some more propeties and print student details.
// const studentdetail = {
//    first_name:'nitu',
//    last_name:'kumari',
//       printstudentdetail: function (){
//         console.log( `my name is ${this.first_name} ${this.last_name} ${this.rollNumber}`)
//       }
// }
// const student = Object.create(studentdetail);
// student.rollNumber = '25'
// console.log(student.printstudentdetail());



// create an object with 2 properties and add 1 properties and add 1 properties using.defineproperty() with writable true.

// const object1 = {};
// Object.defineProperties(object1,{
//     property1:{
//         value: 40,
//         writable: true,
//     },
//     property2:{
//         value:20,
//         writable: false,
//     },


// })
// console.log(object1.property2)




// const object1 = {
//     value: 12,
    
// };
// Object.freeze(object1);

// object1.value = 22;

// console.log(object1.value);

 

// const obj = {}

// Object.preventExtensions(obj);

// Object.defineProperty(obj, "gender",{ value: "female", writable: true})

// console.log(obj)

// map is a function
// Array
// callback
// this

   
function myMap(arr, callback, thisArg) {
    if (!arr || !Array.isArray(arr)){
        return new Error('not an array')
    }
    console.log(callback)
    if (!callback || typeof callback !== 'function'){
        return new Error(` ${callback} is not a function`)
    }
    const resultArr = [];
    for (let i = 0; i < arr.length; i += i){
        const arrElem = callback(arr[i], i, arr)
        resultArr.push(arrElem)
    }
    return resultArr 
}
// myMap([1,2,3,4,5])
const callfunc = (el, idx, arr) =>{
    return el** idx + arr.length
}
myMap([1,2,3,4,5],callfunc)
