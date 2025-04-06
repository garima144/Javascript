let tasks = document.getElementsByClassName("task");
let lists = document.getElementsByClassName("list");
let current = null;

for (let i = 0; i < tasks.length; i++) {
  tasks[i].addEventListener("dragstart", dragStartHandler);
}

for (let j = 0; j < lists.length; j++) {
  lists[j].addEventListener("dragover", dragOverHandler);
  lists[j].addEventListener("drop", dragEndHandler);
  lists[j].addEventListener("dragenter", dragEnter);
}

function dragEnter(e) {
  e.preventDefault();
  this.classList.add("hovered");
}

function dragStartHandler(event) {
  current = this;
}

function dragOverHandler(event) {
  console.log("helllpoo");
  event.preventDefault();
}

function dragEndHandler(event) {
  console.log("heyy");
  const afterElement = getDragAfterElement(this, event.clientY);
  if (afterElement === null) {
    this.append(current);
  } else {
    this.insertBefore(current, afterElement);
  }
}

function getDragAfterElement(container, y) {
  const draggableElements = [...container.querySelectorAll(".task:not(.hold)")];
  return draggableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect();
    const offset = y - box.top - box.height / 2;
    if(offset < 0 &&  offset > closest.offset){
        return { offset:offset, element: child }
    }else{
        return closest;
    }
  }, {
    offset: Number.NEGATIVE_INFINITY,
  }).element;
}
