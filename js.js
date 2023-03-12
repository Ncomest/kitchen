"use strict"

// Получаем модальное окно
var modal = document.getElementById("myModal");

// Получаем элемент <span>, который закрывает модальное окно
var span = document.getElementsByClassName("close")[0];

// Получаем картинки и кнопки
var images = document.querySelectorAll(".wrap-img img");
var btns = document.querySelectorAll(".wrap-img button");

// Функция, которая открывает модальное окно с соответствующей картинкой
function openModal(index) {
  modal.style.display = "block";
  modalImg.src = images[index].src;
  document.body.style.overflow = "hidden";
}

// Добавляем обработчик клика для каждой кнопки
btns.forEach(function (btn, index) {
  btn.addEventListener("click", function () {
    openModal(index);
  });
});

// Добавляем обработчик клика для элемента <span>, который закрывает модальное окно
span.addEventListener("click", function () {
  modal.style.display = "none";
});

// Добавляем обработчик клика для модального окна, чтобы закрыть его при клике на нем
modal.addEventListener("click", function () {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
});

