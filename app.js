window.addEventListener("load", (e) => {
    const newTaskInput = document.querySelector(".new-task-input");
    const task = document.querySelector(".task");
    const tasks = document.querySelector(".todo-tasks");
    const completeIcon = document.querySelector(".check");
    const deleteIcon = document.querySelector(".delete");

     

    // add a new task:
    newTaskInput.addEventListener("keypress", (e) => {
        if(e.key !== "Enter" || e.target.value === ""){
            return;
        }
        e.preventDefault();
        console.log(e.target.value);

        const newTask = document.createElement("li");
        newTask.classList.add("task");
        newTask.innerHTML = `
            <div>
                <img class="check" src="./images/icon-check.svg" alt="task completed">
                ${e.target.value}
            </div>
            <img class="delete" src="./images/icon-cross.svg" alt="delete task">
        `
        tasks.prepend(newTask);
        e.target.value = "";

    });

    // delete a task:
    deleteIcon.addEventListener("click", (e) => {
        alert("Hello!");
    });

});

