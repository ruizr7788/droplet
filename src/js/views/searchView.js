import View from "./view";
class SearchView extends View {
  _parentElement = document.getElementById("header__container");
  _form = document.getElementById("search__container");
  _searchQuery = document.getElementById("search__query");
  #location = document.querySelector(".location");
  _spinnerEl = document.querySelector(".spinner");
  #errMsgEl = document.getElementById("error__message--header");

  addHandlerQuery(handler) {
    const form = document.getElementById("search__container");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      this.renderSpinner(this._parentElement);
      //   input
      const query = this._searchQuery.value;
      handler(query);
    });
  }

  renderInfo(data) {
    this._clear();
    this.#errMsgEl.textContent = "";
    this.#location.textContent = `${data.location.name}, ${data.location.region}`;
    this._reveal();
  }

  _renderError(errMsg) {
    this._clear();
    this.#errMsgEl.textContent = errMsg;
  }

  _clear() {
    this.#location.textContent = "";
    this._parentElement.querySelector(".spinner").remove();
  }
  _reveal() {
    this._revealSections();
    this._revealText();
  }
}

export default new SearchView();
