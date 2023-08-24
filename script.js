const idInput = document.getElementById('idInput');
const todoList = document.getElementById('todoList');
const submitBtn = document.getElementById('submitBtn');
const searchInput = document.getElementById('searchInput')
const GET_URL = (idInputVal) => `https://jsonplaceholder.typicode.com/todos/${idInputVal}`;
const todoLiData = [];

const clearTodoList = () => {
    todoList.innerHTML = '';
}

const updateTodoList = () =>{
    clearTodoList();
    for(let i =0; i < todoLiData.length; i++){
        const liTagElement = document.createElement('li')
        liTagElement.innerHTML = todoLiData[i];
        todoList.append(liTagElement);
    }
}



const addLIElement = (liText) => {
    todoLiData.push(liText);
    const liTagElement = document.createElement('li')
    liTagElement.innerText = liText;
    todoList.append(liTagElement);
}



const getApiData = async(URL) => {
    const response = await fetch(URL)
    const data = await response.json();
    return data;
};


const handleAddTaskSubmit = async (event) => {
    event.preventDefault();

    const idInputVal = idInput.value;
    if (idInputVal === '' || idInputVal < 0 || idInputVal > 200) {
        alert('Enter a valid id!');
        // idInput.value = '';
        return;
    }

    submitBtn.innerText = 'Adding';
    const todoData = await getApiData(GET_URL(idInputVal));


    if (!todoData.title) {
        alert('Failed to get Data ')
        submitBtn.innerText = 'Add';
        // idInput.value = '';
        return;
    }
    // console.log(idInputVal,todoData)
     
    addLIElement(todoData.title);
    console.log(todoLiData)
    idInput.value = '';
    submitBtn.innerText = 'Add';
    
};

const handlesearchInput = (event) => {
    console.log(event.target.value)
}