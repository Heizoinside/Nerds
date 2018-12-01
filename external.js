var link = document.querySelector(".btn-red-write");
var modal = document.querySelector(".modal");
var close = document.querySelector(".modal-close");
var form = modal.querySelector(".modal-form");
var data = modal.querySelector("input");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.add("modal-show");
});
close.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.remove("modal-show");
});
form.addEventListener("submit", function (evt) {
  if (!data.value) {
  evt.preventDefault();
  console.log("Нужно ввести свои данные");
}
});
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modal.classList.contains("modal-show")) {
      modal.classList.remove("modal-show");
    }
  }
});
