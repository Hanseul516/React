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

///////////////////////////////////////////////////////////////////////////

const itemListCine = [
  { no: 1, todo: "어벤져스", done: false },
  { no: 2, todo: "다크나이트", done: false },
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

///////////////////////////////////////////////////////////////////////////

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
  const inputElementStudy = document.querySelector("#todoinput input");
  const itemStudy = {
    no: nextNoStudy,
    todo: inputElementStudy.value,
    done: false,
    // done: false
  };

  itemListStudy.push(itemStudy);

  // 화면 갱신
  let liNodeStudy = renderTodoItemStudy(itemStudy);
  ulNodeStudy.appendChild(liNodeStudy);

  inputElementStudy.value = "";
  nextNoStudy++;
}

function deleteItemStudy(event) {
  const noStudy = Number(event.target.parentNode.dataset.key); // 삭제할 아이템의 번호

  // 데이터 갱신
  const index = itemListStudy.findIndex((item) => item.no === noStudy);
  itemListStudy.splice(index, 1);

  // 화면 갱신
  const liNodeStudy = event.target.parentNode;
  liNodeStudy.remove();
}

function toggleDoneStudy(event) {
  const noStudy = Number(event.target.parentNode.dataset.key); // 삭제할 아이템의 번호

  // 데이터 갱신
  const indexStudy = itemListStudy.findIndex(
    (itemStudy) => itemStudy.no === noStudy
  );
  const itemStudy = itemListStudy[indexStudy];
  itemStudy.done = !itemStudy.done;

  // 화면 갱신
  event.target.style.textDecoration = itemStudy.done ? "line-through" : "none";
}
