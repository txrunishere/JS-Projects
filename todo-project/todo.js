let tasks = [];

const btn = document.querySelector('.todo-btn');

btn.addEventListener('click', () => {
    const input = document.querySelector(".todo-inp");
    const inputTask = input.value;

    if (inputTask) {
        const li = document.createElement('li');
        const btnDl = document.createElement('button');
        btnDl.textContent = "Delete";
        btnDl.style.marginLeft = "7px";
        
        li.appendChild(document.createTextNode(inputTask));
        li.appendChild(btnDl);
        document.querySelector('.todo-tasks').appendChild(li);
        input.value = "";
        btnDl.addEventListener('click', () => li.remove());
    } else {
        alert ("Write a Task");
    }
});