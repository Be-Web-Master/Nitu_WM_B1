// Capitalize first letter of the string -> "webmaster" -> "Webmaster"."

function latter (){
   let str = "webmaster";
   console.log(str.charAt(0).toUpperCase()+str.slice(1));
}
latter();