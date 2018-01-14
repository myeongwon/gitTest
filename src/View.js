function View (selector) {
  this.element = document.querySelector(selector);
  this.displayType = 'block';
}

View.prototype.removeClass = function (className) {
  this.element.classList.remove(className);
};

View.prototype.hide = function () {
  this.element.style.display = 'none';
};