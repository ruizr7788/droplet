class MainInfo {
  #temp = document.querySelector(".current--weather");
  #description = document.querySelector(".current--weather-description");
  #pollution = document.getElementById("main__pollution");
  #wind = document.getElementById("wind");

  renderInfo(data) {
    this.#temp.innerHTML = `
    ${data.currentWeather.feelsLike}&deg;F
    `;
    this.#description.innerHTML = data.currentWeather.description;
    this.#pollution.innerHTML = data.currentWeather.airQualityPM.toFixed(0);
    this.#wind.innerHTML = `
        <span id="wind__speed" class="main--white">
            ${data.currentWeather.windSpeed.toFixed(1)}&nbsp;mph&nbsp;
            <span id="wind__direction" class="secondary--white">
                ${
                  data.currentWeather.windSpeed !== 0
                    ? data.currentWeather.windDirection
                    : ""
                }
            </span>
        </span>
  
    `;
  }
}

export default new MainInfo();
