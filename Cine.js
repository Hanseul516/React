const itemListCine = [
  { no: 1, todo: "어벤져스", done: false },
  { no: 2, todo: "다크나이트", done: true },
  { no: 3, todo: "미션임파서블", done: false },
];

let nextNoCine = itemListCine.length + 1;

function renderTodoItemCine({ no, todo, done = false }) {
  const liNodeCine = document.createElement("li");
  liNodeCine.setAttribute("data-key", no);

  const noSpanNodeCine = document.createElement("span");
  const todoSpanNodeCine = document.createElement("span");
  if (done) {
    todoSpanNodeCine.style.textDecoration = "line-through";
  }
  todoSpanNodeCine.setAttribute("onclick", "toggleDoneCine(event)");
  const deleteSpanNodeCine = document.createElement("span");
  deleteSpanNodeCine.setAttribute("onclick", "deleteItemCine(event)");

  const noTextNodeCine = document.createTextNode(no);
  const todoTextNodeCine = document.createTextNode(todo);
  const deleteTextNodeCine = document.createTextNode("삭제");

  noSpanNodeCine.appendChild(noTextNodeCine);
  todoSpanNodeCine.appendChild(todoTextNodeCine);
  deleteSpanNodeCine.appendChild(deleteTextNodeCine);

  liNodeCine.appendChild(noSpanNodeCine);
  liNodeCine.appendChild(todoSpanNodeCine);
  liNodeCine.appendChild(deleteSpanNodeCine);

  return liNodeCine;
}

const ulNodeCine = document.querySelector("#listCine ul");
itemListCine.forEach((item) => {
  let liNodeCine = renderTodoItemCine(item);
  ulNodeCine.appendChild(liNodeCine);
});

function addItemCine() {
  // 데이터 갱신
  const inputElementCine = document.querySelector("#todoinput input");
  const itemCine = {
    no: nextNoCine,
    todo: inputElementCine.value,
    done: false,
  };

  itemListCine.push(itemCine);

  // 화면 갱신
  let liNodeCine = renderTodoItemCine(itemCine);
  ulNodeCine.appendChild(liNodeCine);

  inputElementCine.value = "";
  nextNoCine++;
}

function deleteItemCine(event) {
  const noCine = Number(event.target.parentNode.dataset.key); // 삭제할 아이템의 번호

  // 데이터 갱신
  const index = itemListCine.findIndex((item) => item.no === noCine);
  itemListCine.splice(index, 1);

  // 화면 갱신
  const liNodeCine = event.target.parentNode;
  liNodeCine.remove();
}

function toggleDoneCine(event) {
  const noCine = Number(event.target.parentNode.dataset.key); // 삭제할 아이템의 번호

  // 데이터 갱신
  const indexCine = itemListCine.findIndex(
    (itemCine) => itemCine.no === noCine
  );
  const itemCine = itemListCine[indexCine];
  itemCine.done = !itemCine.done;

  // 화면 갱신
  event.target.style.textDecoration = itemCine.done ? "line-through" : "none";
}
