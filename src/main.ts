import { clearList } from "./clearList";
import "./css/style.css";
import { getLastIdValue } from "./getLastIdValue";
import { ListItem } from "./interfaces/ListItem";
import { renderList } from "./renderList";
import { saveNewTask } from "./saveNewTask";

const initApp = (): void => {
  const form = document.getElementById("itemEntryForm") as HTMLFormElement;
  const clearBtn = document.getElementById(
    "clearItemsButton"
  ) as HTMLButtonElement;
  
  renderList();

  form.addEventListener("submit", (e: SubmitEvent) => {
    e.preventDefault();
    const taskInputElement = document.getElementById(
      "newItem"
    ) as HTMLInputElement;
    const taskValue = taskInputElement.value;

    if (taskValue) {
      const newItem: ListItem = {
        id: getLastIdValue() + 1,
        task: taskValue,
        checked: false,
      };
      saveNewTask(newItem);
    }

    taskInputElement.value = "";
  });

  clearBtn.addEventListener("click", clearList);
};

document.addEventListener("DOMContentLoaded", initApp);
