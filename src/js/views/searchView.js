import View from "./view";
class SearchView extends View {
  _parentElement = document.getElementById("search__container");
  _searchQuery = document.getElementById("search__query");
  #location = document.querySelector(".location");

  addHandlerQuery(handler) {
    this._parentElement.addEventListener("submit", function (e) {
      e.preventDefault();
      handler();
    });
  }

  getQuery() {
    const query = this._searchQuery.value;
    // this._clearInput();
    return query;
  }

  renderInfo(data) {
    this.#location.innerHTML = `${data.location.name}, ${data.location.region}`;
  }
}

export default new SearchView();
