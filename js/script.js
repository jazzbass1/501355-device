  var link = document.querySelector(".write-us-btn");
  var popup = document.querySelector(".modal");
  var close = popup.querySelector(".modal-close");
  var name = popup.querySelector("[name=name]");

  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    name.focus();
  });
  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");

  });
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      }
    }
  });

  var mapLink = document.querySelector(".contacts-btn-map");
  var mapPopup = document.querySelector(".modal-map");
  var mapClose = mapPopup.querySelector(".modal-close");

  mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
  });

  mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (mapPopup.classList.contains("modal-show")) {
        mapPopup.classList.remove("modal-show");
      }
    }
  });
