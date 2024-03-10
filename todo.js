const form = document.getElementById("todo-form")
const input = document.getElementById("todo-input")
const todolane = document.getElementById("todo-lane")

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const val = input.value;

    const newTask = document.createElement("p")
    newTask.classList.add("task")
    newTask.setAttribute("draggable","true")
    newTask.innerText = val

    newTask.addEventListener("dragstart",()=>{
        newTask.classList.add("is-dragging")
    })
    newTask.addEventListener("dragend",()=>{
        newTask.classList.remove("is-dragging")
    })
    todolane.appendChild(newTask);
    input.value = "";
})