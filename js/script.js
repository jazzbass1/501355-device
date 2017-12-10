  var link = document.querySelector(".write-us-btn");
  var popup = document.querySelector(".modal");
  var close = popup.querySelector(".modal-close");
  var name = popup.querySelector("[name=name]");
  var form = popup.querySelector("form");
  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
  });
  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    name.focus();
  });
  form.addEventListener("submit", function (evt) {
    evt.preventDefault();
  });
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
      }
    }
  });
