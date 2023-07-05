import refs from "./refs.js";

function addNewTask() {
  const taskText = refs.myInput.value.trim();
  if (taskText === "") {
    alert("Введіть текст будь-ласка в поле!🙅‍♂️");
    return;
  }
}

function handleTaskBehaviour() {}

function createLi() {}

export { addNewTask, handleTaskBehaviour };
