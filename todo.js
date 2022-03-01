let loadCookie = () => {
    if(Cookies.get("todoList") == null){
        return
    }
    else{
        let cookieValue = Cookies.get("todoList").split(',');
        for(let i=0; i < cookieValue.length; i++){            
            addTodo(cookieValue[i])
        }
    }
}
 

let updateCookie = () =>{
    Cookies.remove('todoList')
    let todos = $('.todo').get();
    let cookie = ""
    for(let i=0; i < todos.length; i++){
        cookie += todos[i].innerText
        if(i+1 != todos.length) cookie += ","
        Cookies.set("todoList",cookie)
    }
}

let addTodo = (task) =>{
    let new_task = $(`<div class="todo">${task}</div>`);                          
    new_task.click(() => {
        new_task.remove();
        updateCookie();
    })
    $("#todo_list").append(new_task)
    updateCookie();
}


$("#new_bt").click((e) =>{
    let task = prompt("Please enter task");
    if (task != null){
        addTodo(task)
    }
})

loadCookie()