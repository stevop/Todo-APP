window.addEventListener("load", (e) => {
    const newTaskInput = document.querySelector(".new-task-input");
    const task = document.querySelector(".task");
    const tasks = document.querySelector(".todo-tasks");
    const completeIcon = document.querySelector(".icon-check");
    const deleteIcon = document.querySelector(".icon-delete");

     

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
                <img class="icon-check" src="./images/icon-check.svg">
                ${e.target.value}
            </div>
            <img class="icon-delete" src="./images/icon-cross.svg">
        `
        tasks.prepend(newTask);
        e.target.value = "";

    });

    // complete a task:
    completeIcon.addEventListener("click", (e) => {
        task.classList.toggle("completed");
    });

    // delete a task:
    deleteIcon.addEventListener("click", (e) => {
        task.classList.add("deleted");
    });

});

