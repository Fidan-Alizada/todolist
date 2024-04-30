function addTodo() {
    var inputValue = document.getElementById("todoInput").value;
    if (inputValue.trim() === '') {
        alert("Please enter a task!");
        return;
    }
    var li = document.createElement("li");
    var textNode = document.createTextNode(inputValue);
    li.appendChild(textNode);
    document.getElementById("todoList").appendChild(li);
    document.getElementById("todoInput").value = "";

    var deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "X";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = function() {
        this.parentElement.remove();
    };
    li.appendChild(deleteBtn);
}