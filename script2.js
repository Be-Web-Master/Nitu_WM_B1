// "3. Reverse an array. [1,2,3,4,5,6] -> [6,5,4,3,2,1] (do not use built-in method)

let original = [1,2,3,4,5,6]
let reverse =[]

    for(let i = original.length-1;i>=0;i--){
        reverse.push(original[i]);
    }
console.log(reverse);