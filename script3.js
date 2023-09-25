// Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards).

function palindrome (str){
  const length = str.length
  for(let i =0;i<length/2;i++){
    if(str[i] !== str.length-1-!){
        return false;
    }
    }
    return true;
}
palindrome (nitin);