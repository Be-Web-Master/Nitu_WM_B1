const form = document.getElementById("form");
const btn = document.getElementById("btn");
const num = document.getElementById("number");
const error = document.getElementById("errorMsg");
const card = document.getElementById("card");
const id = document.getElementById("userID");
const title =  document.getElementById("title")

const submitHandle = (event) => {
  event.preventDefault();
  if(num.value >= 10 && num.value <= 200){
    console.log(num.value)
    fetch(`https://jsonplaceholder.typicode.com/todos/${num.value}`)
    .then((response) => response.json())
    .then((data) => {
        userID.innerText = data.id
        title.innerText = data.title
        console.log(data);
    })
    .catch((err) => console.log(err));
  }else{
    alert("bhai plzz number sahi daloo")
  }

};
