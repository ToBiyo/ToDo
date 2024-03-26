import { ListItem } from "./interfaces/ListItem";
import { updateLocalList } from "./updateLocalList";
import { parseLocalList } from "./parseLocalList";

export const saveNewTask = (task: ListItem): void => {
  if (parseLocalList()) {
    const tasks = localStorage.getItem("MyTasks") as string;
    let parsedTasks: ListItem[] = JSON.parse(tasks);

    parsedTasks.push(task);

    updateLocalList(parsedTasks);
    return;
  }

  updateLocalList([task]);
};
