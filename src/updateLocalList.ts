import { ListItem } from "./interfaces/ListItem";
import { renderList } from "./renderList";

export const updateLocalList = (list: ListItem[]): void => {
  localStorage.setItem("MyTasks", JSON.stringify(list));
  renderList();
};
