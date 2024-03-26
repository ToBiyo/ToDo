import { renderList } from "./renderList";

export const clearList = (): void => {
  if (!localStorage.getItem("MyTasks")) return;
  localStorage.clear();
  renderList();
};
