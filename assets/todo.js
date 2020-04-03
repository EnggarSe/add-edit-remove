// Add and Edit an item
console.log("masuk");

let todos = ["Gaming","Swimming","Writing","Running"];

let loopingTodos = todo => {
    let todoResult = "";
    for (let i = 0; i<todo.length ; i++){
        todoResult+= `${i + 1} . ${todo[i]} \n`;
    }
    alert(todoResult);
};

let showTodos = todo =>{
    loopingTodos(todo);
    
    // Add an item
    let isAddtodo = confirm("Do you want add item ?");

    if(isAddtodo === true){
        let newTodo = prompt("Fill your todo here", "Item");
        todos.push(newTodo);
        loopingTodos(todo);
    }
    else if (isAddtodo === false){
        editTodo(todo);
    }
};

let editTodo = todo =>{
    let isEditTodo = confirm("Do you want edit an item ?");

    //edit item 
    if(isEditTodo === true){
        let indexTodo = prompt("Select Your Number");
        let editTodo = prompt("Insert Edit todo");

        todos.splice(indexTodo-1, 1, editTodo);
        loopingTodos(todo);
    }
    else if(isEditTodo === false){
        removeTodo(todo);
    }
};

let removeTodo = todo =>{
    let isRemoveTodo = confirm("Do you want to remove an item?");

    //remove item
    if(isRemoveTodo === true){
        let removeItem = prompt("Select your delete");
        console.log(removeItem);
        todos.splice(removeItem-1,1);
        loopingTodos(todo);
    }
    else if(isRemoveTodo === false){
        showTodos(todo)
    }
}





showTodos(todos);
