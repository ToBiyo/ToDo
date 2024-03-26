import { ListItem } from "./interfaces/ListItem";
import { parseLocalList } from "./parseLocalList";

export const getLastIdValue = (): number => {
  if (parseLocalList()) {
    let list = parseLocalList() as ListItem[];
    let length: number = list.length;
    return length;
  }

  return 0;
};
