const left = document.querySelector("#left");
const right = document.querySelector("#right");
const itemsList = document.querySelector("#items");

const loop = (direction, e) => { // е - объект событие
  e.preventDefault();

  if (direction === "right") {
    itemsList.appendChild(itemsList.firstElementChild); //переместить первый элемент слайдера вниз по дереву
  } else {
    itemsList.insertBefore(itemsList.lastElementChild, items.firstElementChild); //insertBefore ставит элемент выше того которой передали в параметрах(эл-т кот будем поднимать, эл-т над которым)
  }
};

right.addEventListener("click", (e) => {
  loop("right", e); //вызываем функцию для события
});

left.addEventListener("click", (e) => {
  loop("left", e);
});