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
  console.log(target.nodeName);
  if (target.nodeName === "LI") {
    target.classList.toggle("checked");
  } else if (target.nodeName === "SPAN") {
    target.parentNode.remove();
  }
}

function createLi({ text }) {
  const liEl = document.createElement("li");
  liEl.textContent = text;
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
  }
}

export { addNewTask, handleTaskBehaviour };
