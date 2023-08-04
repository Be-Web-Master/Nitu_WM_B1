const userAge = 35;
let userAgeMessage =""
switch(true){
    case userAge < 18
      userAgeMessage = " under Age"
        break;
     case userAge >= 18
        userAgeMessage = "Adult"
        
     case userAge < 60
       userAgeMessage = 'Adult and senior';
        break
    default: 
        userAgeMessage = "Age not vaild";     
}