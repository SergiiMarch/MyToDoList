import refs from "./refs.js";
import { addNewTask, handleTaskBehaviour } from "./function.js";
import { save, load } from "./storage.js";

refs.addBtn.addEventListener("click", addNewTask);
refs.myUL.addEventListener("click", handleTaskBehaviour);
