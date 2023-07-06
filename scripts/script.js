import refs from "./refs.js";
import { addNewTask, handleTaskBehaviour, fiilTaskList } from "./function.js";
import { save, load } from "./storage.js";

refs.addBtn.addEventListener("click", addNewTask);
refs.myUL.addEventListener("click", handleTaskBehaviour);
window.addEventListener("DOMContentLoaded", fiilTaskList);
