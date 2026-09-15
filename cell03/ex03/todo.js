const newButton = document.getElementById("newButton");
const ftList = document.getElementById("ft_list");


// ตอนเปิดหน้าเว็บ ให้โหลดข้อมูลจาก cookie
loadTodos();


// เมื่อกดปุ่ม New
newButton.addEventListener("click", function () {

    const text = prompt("Enter a new TO DO:");

    if (text === null || text.trim() === "") {
        return;
    }

    createTodo(text);

    saveTodos();
});


// สร้าง TODO ใหม่
function createTodo(text) {

    const todo = document.createElement("div");

    todo.className = "todo";
    todo.textContent = text;


    // ถ้าคลิก TODO ให้ถามว่าจะลบไหม
    todo.addEventListener("click", function () {

        const answer = confirm("Do you want to remove this TO DO?");

        if (answer) {
            todo.remove();

            saveTodos();
        }
    });


    // ใส่ TODO ใหม่ไว้บนสุด
    ftList.prepend(todo);
}


// บันทึก TODO ทั้งหมดลง cookie
function saveTodos() {

    const todos = document.querySelectorAll(".todo");

    const todoArray = [];

    todos.forEach(function (todo) {
        todoArray.push(todo.textContent);
    });

    const data = JSON.stringify(todoArray);

    document.cookie =
        "todos=" + encodeURIComponent(data) +
        "; max-age=31536000; path=/";
}


// โหลด TODO จาก cookie
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