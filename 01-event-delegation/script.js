// Event Delegation in Action
const defaultListItems = [
  "Buy milk",
  "Walk dog",
  "Write code",
  "Read a book",
  "Call mom",
];

const list = document.getElementById("todo-list");
const clearButton = document.getElementById("clear-button");
const addItemButton = document.getElementById("add-new-item-button");
const addItemInput = document.getElementById("add-new-item-input");

// Create list items to render
defaultListItems.forEach((item) => {
  list.insertAdjacentElement("beforeend", generateItemWithDelete(item));
});

// Event Listeners
clearButton.addEventListener("click", handleClear);
list.addEventListener("click", (event) => {
  const deleteBtn = event.target.closest(".delete-button");
  if (deleteBtn && list.contains(deleteBtn)) {
    // Handle delete
    const listItemToDelete = deleteBtn.parentNode;
    list.removeChild(listItemToDelete);
    logEvent(`You deleted ${listItemToDelete.firstChild.innerText}`);
    return;
  }
  const li = event.target.closest("li");
  if (!li || !list.contains(li)) return;
  logEvent(`You clicked ${li.firstChild.innerText}`);
});
addItemButton.addEventListener("click", handleAddNewItem);

function generateItemWithDelete(itemName) {
  const listItem = document.createElement("li");

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-button");
  deleteButton.innerText = "X";

  const displayValue = document.createElement("span");
  displayValue.innerText = itemName;

  listItem.insertAdjacentElement("beforeend", displayValue);
  listItem.insertAdjacentElement("beforeend", deleteButton);

  return listItem;
}

function handleAddNewItem() {
  list.insertAdjacentElement(
    "beforeend",
    generateItemWithDelete(addItemInput.value)
  );
  logEvent(`You added ${addItemInput.value}`);
  addItemInput.value = "";
}

function handleClear() {
  document.getElementById("event-log-content").innerHTML = "";
}

function logEvent(message) {
  const now = `${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`;
  document.getElementById(
    "event-log-content"
  ).innerHTML += `${now} - ${message}<br/>`;
}
