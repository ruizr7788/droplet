export default class View {
  _locationElement = document.querySelectorAll(".location");

  renderSpinner(parentEl) {
    const spinnerMarkup = this._generateSpinnerMarkup();
    parentEl.insertAdjacentHTML("afterbegin", spinnerMarkup);
  }

  _generateSpinnerMarkup() {
    return `
        <div class="spinner"></div>
    `;
  }

  _revealSections() {
    const sections = document.querySelectorAll(".hidden--section");
    if (!sections) return;
    sections.forEach((section) => section.classList.remove("hidden--section"));
  }
  _revealText() {
    const hiddenText = document.querySelectorAll(".hidden--text");
    if (!hiddenText) return;
    hiddenText.forEach((text) => text.classList.remove("hidden--text"));
  }
}
