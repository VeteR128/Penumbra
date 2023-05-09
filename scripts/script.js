const openButton = document.querySelectorAll(".media__img");
const popup = document.querySelector(".popup");
const closeButton = "popup__close";
const popupImage = document.querySelector(".popup__img");
const headerLinks = document.querySelectorAll(".header__link");

class openAndClose {
  constructor(thatOpenAndClose, closeButton, openButton, popupImage) {
    this._closeButton = closeButton;
    this._openButton = openButton;
    this._thatOpenAndClose = thatOpenAndClose;
    this._popupImage = popupImage;
  }
  setEventListeners() {
    this._openButton.forEach((element) => {
      element.addEventListener("click", () => {
        this._setSrc(element);
        this._open();
      });
    });

    this._thatOpenAndClose.addEventListener("click", (e) => {
      if (e.target.classList.contains(this._closeButton)) {
        this._close();
      }
      if (e.target.classList.contains("active")) {
        this._close();
      }
    });
  }
  _setSrc(element) {
    this._popupImage.src = element.getAttribute("src");
  }
  _open() {
    this._thatOpenAndClose.classList.toggle("active");
  }
  _close() {
    this._thatOpenAndClose.classList.remove("active");
  }
}
class scrollLink {
  constructor(links) {
    this._links = links;
  }
  setEventListeners() {
    for (let link of this._links) {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const id = link.getAttribute("href");
        this._scroll(id);
      });
    }
  }
  _scroll(id) {
    document
      .querySelector("" + id)
      .scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
const openAndClosePopup = new openAndClose(
  popup,
  closeButton,
  openButton,
  popupImage
);
openAndClosePopup.setEventListeners();
const scrollHeaderLinks = new scrollLink(headerLinks);
scrollHeaderLinks.setEventListeners();
