import refs from "./refs.js";
import { save, load } from "./storage.js";

const STORAGE_KEY = "task";
let currentId = 1;

function addNewTask() {
  const clearInput = () => (refs.myInput.value = "");
  const taskText = refs.myInput.value.trim();
  if (taskText === "") {
    alert("Введіть текст будь-ласка в поле!🙅‍♂️");
    clearInput();
    return;
  }
  createLi({
    text: taskText,
  });
  addTaskToStorage(taskText);
  clearInput();
}

function handleTaskBehaviour({ target }) {
  const tasks = load(STORAGE_KEY);

  if (target.nodeName === "LI") {
    target.classList.toggle("checked");
    const cerrentObj = tasks.find(
      (task) => Number(task.id) === Number(target.dataset.id)
    );
    cerrentObj.isDone = !cerrentObj.isDone;
  } else if (target.nodeName === "SPAN") {
    target.parentNode.remove();
    const index = tasks.findIndex(
      (task) => Number(task.id) === Number(target.parentNode.dataset.id)
    );
    tasks.splice(index, 1);
  }
  save(STORAGE_KEY, tasks);
}

function createLi({ text, id = currentId }) {
  const liEl = document.createElement("li");
  liEl.textContent = text;
  liEl.dataset.id = id;
  addCloseButton(liEl);
  refs.myUL.appendChild(liEl);
}

function addCloseButton(target) {
  const span = document.createElement("span");
  const txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  target.appendChild(span);
}

function creatTaskObject({ text, id = currentId, isDone = false }) {
  return {
    text,
    id,
    isDone,
  };
}

function addTaskToStorage(text) {
  const tasks = load(STORAGE_KEY);

  if (tasks === undefined) {
    const taskArr = [creatTaskObject({ text })];
    save(STORAGE_KEY, taskArr);
  } else {
    tasks.push(creatTaskObject({ text }));
    save(STORAGE_KEY, tasks);
  }
  currentId += 1;
}

export { addNewTask, handleTaskBehaviour };
