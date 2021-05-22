const main = document.querySelector(".main-container")

const submit = document.querySelector("#button")
main.append(submit)

function addTask() {
    const list = document.querySelector(".main-list")
    const addItem = document.querySelector(".task-input").value
    list.append(addItem);
}
submit.addEventListener("click", function() {
    addTask();

});

