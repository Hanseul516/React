const itemList = [
  { no: 1, todo: "두부", done: false },
  { no: 2, todo: "계란", done: false },
  { no: 3, todo: "라면", done: false },
];

let nextNo = itemList.length + 1;

function renderTodoItem({ no, todo, done = false }) {
  const liNode = document.createElement("li");
  liNode.setAttribute("data-key", no);

  const noSpanNode = document.createElement("span");
  const todoSpanNode = document.createElement("span");
  if (done) {
    todoSpanNode.style.textDecoration = "line-through";
  }
  todoSpanNode.setAttribute("onclick", "toggleDone(event)");
  const deleteSpanNode = document.createElement("span");
  deleteSpanNode.setAttribute("onclick", "deleteItem(event)");

  const noTextNode = document.createTextNode(no);
  const todoTextNode = document.createTextNode(todo);
  const deleteTextNode = document.createTextNode("삭제");

  noSpanNode.appendChild(noTextNode);
  todoSpanNode.appendChild(todoTextNode);
  deleteSpanNode.appendChild(deleteTextNode);

  liNode.appendChild(noSpanNode);
  liNode.appendChild(todoSpanNode);
  liNode.appendChild(deleteSpanNode);

  return liNode;
}

const ulNode = document.querySelector("#list ul");
itemList.forEach((item) => {
  let liNode = renderTodoItem(item);
  ulNode.appendChild(liNode);
});

function addItem() {
  //데이터 갱신
  const inputElement = document.querySelector("#todoinput input");
  const item = {
    no: nextNo,
    todo: inputElement.value,
    done: false,
    //done: false
  };

  itemList.push(item);

  //화면 갱신
  let liNode = renderTodoItem(item);
  ulNode.appendChild(liNode);

  inputElement.value = "";
  nextNo++;
}

function deleteItem(event) {
  const no = Number(event.target.parentNode.dataset.key); //삭제할 아이템의 번호

  //데이터 갱신
  const index = itemList.findIndex((item) => item.no === no);
  itemList.splice(index, 1);

  //화면 갱신
  const liNode = event.target.parentNode;
  liNode.remove();
}

function toggleDone(event) {
  const no = Number(event.target.parentNode.dataset.key); //삭제할 아이템의 번호

  //데이터 갱신
  const index = itemList.findIndex((item) => item.no === no);
  const item = itemList[index];
  item.done = !item.done;

  //화면 갱신
  event.target.style.textDecoration = item.done ? "line-through" : "none";
}
