const openButton = document.querySelector("#openOverlay"); //кнопка
const body = document.body; //переменная для работы в body
const successModal = createModal("The message has been sent, thank you!");

openButton.addEventListener("click", (e) => {
  body.appendChild(successModal); //
});

function createModal(content) {
  const overlayElement = document.createElement("div");//создаем div
  overlayElement.classList.add("overlay"); //добавляемему класс overLay

  overlayElement.addEventListener("click", (e) => { //событие при клике на div "overLay"
    if (!e.target.classList.contains("content")) {//при клике на элемент который не содержит класс content 
      closeElement.click();
    }
    // if (e.target === overlayElement) {
    //   closeElement.click();
    // }
  });

  const containerElement = document.createElement("div"); //создаем div
  containerElement.classList.add("modal-container"); // добавляем ему класс modal-container

  const contentElement = document.createElement("div"); // создаем div в котором храинть содержимое окна
  contentElement.classList.add("content");// добавляем ему класс content

  contentElement.innerHTML = content;

  const closeElement = document.createElement("a"); //создаем ссылку закрытия
  closeElement.classList.add("close"); //ей добавляем класс "close"
  closeElement.textContent = "x";// текстовое содержимое 
  closeElement.href = "#"; //href для ссылки

  closeElement.addEventListener("click", (e) => { // событие при клике по ссылке закрыть
    e.preventDefault(); //отмена действий по умолчанию
    body.removeChild(overlayElement); //при клике удалять div с классом "overlay"
  });

  overlayElement.appendChild(containerElement); //добавляем в div "overlay" div "modal-container"
  containerElement.appendChild(closeElement); // добавляем в div "modal-container" div "content"
  containerElement.appendChild(contentElement); // добавляем в div "modal-container" div "content"

  return overlayElement;//возвращаем готовую разметку
}