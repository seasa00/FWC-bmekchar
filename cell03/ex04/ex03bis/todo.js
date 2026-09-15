loadTodos();


$("#newButton").click(function () {

    const text = prompt("Enter a new TO DO:");

    if (text === null || text.trim() === "") {
        return;
    }

    createTodo(text);
    saveTodos();
});


function createTodo(text) {

    const todo = $("<div>");

    todo.addClass("todo");
    todo.text(text);


    todo.click(function () {

        const answer = confirm("Do you want to remove this TO DO?");

        if (answer) {
            todo.remove();
            saveTodos();
        }
    });


    $("#ft_list").prepend(todo);
}


function saveTodos() {

    const todoArray = [];

    $(".todo").each(function () {
        todoArray.push($(this).text());
    });

    const data = JSON.stringify(todoArray);

    document.cookie =
        "todos=" + encodeURIComponent(data) +
        "; max-age=31536000; path=/";
}


function loadTodos() {

    const cookies = document.cookie.split("; ");
    let todoData = null;

    for (let cookie of cookies) {

        const parts = cookie.split("=");

        if (parts[0] === "todos") {
            todoData = decodeURIComponent(parts[1]);
        }
    }

    if (todoData === null) {
        return;
    }

    const todoArray = JSON.parse(todoData);

    for (let i = todoArray.length - 1; i >= 0; i--) {
        createTodo(todoArray[i]);
    }
}