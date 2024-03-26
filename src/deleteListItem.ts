import { ListItem } from "./interfaces/ListItem";
import { parseLocalList } from "./parseLocalList";
import { updateLocalList } from "./updateLocalList";

export const deleteListItem = (id: string): void => {
  let taskList = parseLocalList() as ListItem[];
  let updatedList = taskList.filter((el) => el.id !== Number(id));
  updateLocalList(updatedList);
};
