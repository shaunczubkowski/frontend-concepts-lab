const list = document.getElementById("todo-list");
const resetButton = document.getElementById("resetButton");
// const listItems = list.querySelectorAll("li");

// Event Listeners
resetButton.addEventListener("click", handleReset);
list.addEventListener("click", (event) => {
  logEvent(event.target.innerText);
});

// listItems.forEach((item) =>
//   item.addEventListener("click", (event) => {
//     logEvent(event.target.innerText);
//   })
// );

function handleReset() {
  document.getElementById("event-log-content").innerHTML = "";
}

function logEvent(message) {
  console.log("log event");
  const now = `${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`;
  document.getElementById(
    "event-log-content"
  ).innerHTML += `${now} - You clicked <strong>${message}</strong><br/>`;
}
