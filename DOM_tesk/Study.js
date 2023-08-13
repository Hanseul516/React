const itemListStudy = [
  { no: 1, todo: "React", done: false },
  { no: 2, todo: "Node.js", done: false },
  { no: 3, todo: "Javascript", done: false },
];

let nextNoStudy = itemListStudy.length + 1;

function renderTodoItemStudy({ no, todo, done = false }) {
  const liNodeStudy = document.createElement("li");
  liNodeStudy.setAttribute("data-key", no);

  const noSpanNodeStudy = document.createElement("span");
  const todoSpanNodeStudy = document.createElement("span");
  if (done) {
    todoSpanNodeStudy.style.textDecoration = "line-through";
  }
  todoSpanNodeStudy.setAttribute("onclick", "toggleDoneStudy(event)");
  const deleteSpanNodeStudy = document.createElement("span");
  deleteSpanNodeStudy.setAttribute("onclick", "deleteItemStudy(event)");

  const noTextNodeStudy = document.createTextNode(no);
  const todoTextNodeStudy = document.createTextNode(todo);
  const deleteTextNodeStudy = document.createTextNode("삭제");

  noSpanNodeStudy.appendChild(noTextNodeStudy);
  todoSpanNodeStudy.appendChild(todoTextNodeStudy);
  deleteSpanNodeStudy.appendChild(deleteTextNodeStudy);

  liNodeStudy.appendChild(noSpanNodeStudy);
  liNodeStudy.appendChild(todoSpanNodeStudy);
  liNodeStudy.appendChild(deleteSpanNodeStudy);

  return liNodeStudy;
}

const ulNodeStudy = document.querySelector("#listStudy ul");
itemListStudy.forEach((item) => {
  let liNodeStudy = renderTodoItemStudy(item);
  ulNodeStudy.appendChild(liNodeStudy);
});

function addItemStudy() {
  // 데이터 갱신
  const inputElementStudy = document.querySelector("#todoinputStudy input");
  const itemStudy = {
    no: nextNoStudy,
    todo: inputElementStudy.value,
    done: false,
  };

  itemListStudy.push(itemStudy);

  // 화면 갱신
  let liNodeStudy = renderTodoItemStudy(itemStudy);
  ulNodeStudy.appendChild(liNodeStudy);

  inputElementStudy.value = "";
  nextNoStudy++;
}

function deleteItemStudy(event) {
  const noStudy = Number(event.target.parentNode.dataset.key);

  // 데이터 갱신
  const index = itemListStudy.findIndex((item) => item.no === noStudy);
  itemListStudy.splice(index, 1);

  // 화면 갱신
  const liNodeStudy = event.target.parentNode;
  liNodeStudy.remove();
}

function toggleDoneStudy(event) {
  const noStudy = Number(event.target.parentNode.dataset.key);

  // 데이터 갱신
  const indexStudy = itemListStudy.findIndex(
    (itemStudy) => itemStudy.no === noStudy
  );
  const itemStudy = itemListStudy[indexStudy];
  itemStudy.done = !itemStudy.done;

  // 화면 갱신
  event.target.style.textDecoration = itemStudy.done ? "line-through" : "none";
}
