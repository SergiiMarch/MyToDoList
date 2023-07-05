import refs from "./refs.js";
import { addNewTask, handleTaskBehaviour } from "./function.js";
console.log(refs);

refs.addBtn.addEventListener("click", addNewTask);
refs.myUL.addEventListener("click", handleTaskBehaviour);
