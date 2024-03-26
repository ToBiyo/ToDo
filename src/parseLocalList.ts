import { ListItem } from "./interfaces/ListItem";

export const parseLocalList = (): ListItem[] | undefined => {
  if (!localStorage.getItem("MyTasks")) return undefined;

  const localTasks = localStorage.getItem("MyTasks") as string;
  const parsedTasks: ListItem[] = JSON.parse(localTasks);

  return parsedTasks;
};
