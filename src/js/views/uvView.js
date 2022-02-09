class UvVIEW {
  #uvIndex = document.getElementById("uv__index");
  #uvDescription = document.querySelector(".uv--description");
  #uvSeverity = document.querySelector(".uv--index-severity");

  renderInfo(data) {
    this.#uvIndex.innerHTML = `${data.currentWeather.uvIndex}&nbsp;UV`;
    this.#uvSeverity.innerHTML = data.currentWeather.uvSeverity;
    this.#uvDescription.innerHTML = `
    <span class="uv__index_severity">${data.currentWeather.uvDescriptor}</span>&nbsp;risk to UV
          rays
    `;
  }
}

export default new UvVIEW();
