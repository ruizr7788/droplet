class DayTemperatures {
  #morningTemp = document.getElementById("morning__temp");
  #afternoonTemp = document.getElementById("afternoon__temp");
  #eveningTemp = document.getElementById("evening__temp");
  #nightTemp = document.getElementById("night__temp");

  renderInfo(dataM) {
    const data = dataM.currentWeather;
    this.#morningTemp.innerHTML = data.morningTemp;
    this.#afternoonTemp.innerHTML = data.afternoonTemp;
    this.#eveningTemp.innerHTML = data.eveningTemp;
    this.#nightTemp.innerHTML = data.nightTemp;
  }
}

export default new DayTemperatures();
