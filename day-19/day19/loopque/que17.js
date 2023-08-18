// Write a function that takes a positive integer as input and returns the sum of its digits each raised to the power of the number of digits in the original integer.

function sumOfDigit(num){
     let str = "" + num
     let n = str.length
     let power = 0
     while(num > 0){
        let baseNum = num % 10
        power += Math.pow(baseNum,n)
        num = Math.floor(num/10)
     }
     return power
}
console.log(sumOfDigit(123))