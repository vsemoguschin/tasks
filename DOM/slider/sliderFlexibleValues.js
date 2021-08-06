//querySelector ищет в документе первый попавшийся элемент с заданным css селектором 
//querySelectorAll все элементы с заданнымсвойством
const left = document.querySelector("#left"); //константа для селектора с индификатором (стрелка влево)
const right = document.querySelector("#right"); //кнопка вправо
const itemsList = document.querySelector("#items"); //слайды
const computedStyles = window.getComputedStyle(itemsList);//?
const items = document.querySelectorAll(".item");//псевдомассив(nodelist) можно взять колличество эллементов как из массива 

const minRight = 0;
const itemWidth = getComputedStyle(items[0]).width; //getComputedStyle получает свойство scc блока которое мы не устанавливали. ширина первого элемента
const step = parseInt(itemWidth); //шаг на который смещать слайд при нажатии на стрелку. ParseInt приводит строку к числу
const preShownItems = 300 / step; // колличество видимых элементов
const maxRight = (items.length - preShownItems) * step;
let currentRight = 0; //let потомучто будем изменять. переменная текущей позиции списка

itemsList.style.right = currentRight; //значение right слайда приравниваем к текущей позиции списка

right.addEventListener("click", e => {// обработчик события "клик" для правой кнопки
  e.preventDefault(); //запретить ссылкам действия по умолчанию (перекидыватьна другую страницу)
  if (currentRight < maxRight) { //условие выполняется только если позиция меньше максимального правого значения
    currentRight += step; //при клике сместить на шаг
    itemsList.style.right = `${currentRight}px`; //к списку применить значение right через объект style и указываем что значение в px
  }
})

left.addEventListener("click", e => {
  e.preventDefault();

  if (currentRight > minRight) {
    currentRight -= step;
    itemsList.style.right = `${currentRight}px`;
  }
})