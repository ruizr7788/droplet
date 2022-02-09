class TomorrowView {
  #location = document.querySelector(".tomorrow--location");
  #temperature = document.getElementById("tomorrow__temp");
  #description = document.getElementById("tomorrow__description");

  renderInfo(data) {
    this.#location.innerHTML = `${data.location.name}, ${data.location.region}`;
    this.#temperature.innerHTML = `${data.tomorrowWeather.temp}&deg;F`;
    this.#description.innerHTML = data.tomorrowWeather.description;
  }
}

export default new TomorrowView();
