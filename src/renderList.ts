import { deleteListItem } from "./deleteListItem";
import { ListItem } from "./interfaces/ListItem";
import { parseLocalList } from "./parseLocalList";

export const renderList = (): void => {
  const ul = document.getElementById("listItems") as HTMLUListElement;
  ul.innerHTML = "";
  if (parseLocalList()) {
    let parsedList = parseLocalList() as ListItem[];

    parsedList.forEach((item) => {
      const listItem = document.createElement("li") as HTMLLIElement;
      listItem.className = "item";
      listItem.id = String(item.id);
      const checkBox = document.createElement("input") as HTMLInputElement;
      checkBox.type = "checkbox";
      const label = document.createElement("label") as HTMLLabelElement;
      label.setAttribute("for", String(item.id));
      label.textContent = item.task;
      const removeButton = document.createElement(
        "button"
      ) as HTMLButtonElement;
      removeButton.className = "button";
      removeButton.textContent = "X";

      removeButton.addEventListener("click", (e): void => {
        const target = e.target as HTMLButtonElement;
        const relatedListItem = target.parentElement as HTMLLIElement;
        let id: string = relatedListItem.id;

        deleteListItem(id);
        
      });
      listItem.appendChild(checkBox);
      listItem.appendChild(label);
      listItem.appendChild(removeButton);
      ul.appendChild(listItem);
    });
  }

  return;
};
