class PredictionView {
  #tomorrowDescription = document.getElementById("next__day--description");
  #tomorrowHighLow = document.querySelector(".tomorrow--high-low");
  #dayAfterNextDescription = document.getElementById(
    "day__after--next-description"
  );
  #dayAfterHighLow = document.querySelector(".day--after-high-low ");

  renderInfo(data) {
    this.#tomorrowDescription.innerHTML = data.tomorrowWeather.description;
    this.#tomorrowHighLow.innerHTML = `<span class="high">${data.tomorrowWeather.high}&deg;</span>/<span class="low">${data.tomorrowWeather.low}&deg;</span>`;
    this.#dayAfterNextDescription.innerHTML = data.secondDay.description;
    this.#dayAfterHighLow.innerHTML = `<span class="high">${data.secondDay.high}&deg;</span>/<span class="low">${data.secondDay.low}&deg;</span>`;
  }
}

export default new PredictionView();
