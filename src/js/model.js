import { getJSON } from "./helpers";
// 29e0186ae9ac4bc18c444525220402

// ----------AIR QUALITY SCALE----------
// green is good: 0-50 text: Little to no risk
// yellow is moderate: 51-100 text: acceptable some risk to some
// orange is unhealthy: 101-150 for sensitave groups text: Members of sensitave groups may experience healthy effects
// red is unhealthy: 151-200 text: Some members of the general public may experience health effects
// purple is very unhealthy: 201-300 text: Health alert-the risk of health effects is increased for everyone
// maroon is hazardous: 301 & higher text: Health warning of emergency contitions: everyone is more likely to be affected

// ----------UV INDEX SCALE----------
// 1-2 green #59970B safe
// 3-5 yellow #F7E419 protection need
// 7-7 orange #E55307 protection need
// 8-10 red #DA4812 extra protection needed
// 11+ purple #6D51C8 extra protection neede

export const state = {
  location: {},
  currentWeather: {},
  tomorrowWeather: {},
  secondDay: {},
};

export const setState = async function (query) {
  const data = await getJSON(
    ` http://api.weatherapi.com/v1/forecast.json?key=29e0186ae9ac4bc18c444525220402&q=${query}&days=7&aqi=yes`
  );

  //-----STORING LOCATION-----
  state.location.name = data.location.name;
  state.location.region = data.location.region;

  //-----STORING INFO FOR BLUE CARDS-----
  state.currentWeather.feelsLike = data.current.feelslike_f;
  state.currentWeather.description = data.current.condition.text;
  const windDir = data.current.wind_dir.split("");
  if (windDir[0] == "N") state.currentWeather.windDirection = "North Wind";
  if (windDir[0] == "E") state.currentWeather.windDirection = "East Wind";
  if (windDir[0] == "S") state.currentWeather.windDirection = "South Wind";
  if (windDir[0] == "W") state.currentWeather.windDirection = "West Wind";

  state.currentWeather.windSpeed = data.current.wind_mph;
  //   state.currentWeather.uvIndex = data.current.uv;
  const uvIndex = data.current.uv;

  switch (uvIndex) {
    case 1 || 2:
      state.currentWeather.uvIndex = uvIndex;
      state.currentWeather.uvSeverity = "safe";
      state.currentWeather.uvDescriptor = "No";
      break;
    case 3 || 5:
      state.currentWeather.uvIndex = uvIndex;
      state.currentWeather.uvSeverity = "moderate";
      state.currentWeather.uvDescriptor = "Moderate";
      break;
    case 6 || 7:
      state.currentWeather.uvIndex = uvIndex;
      state.currentWeather.uvSeverity = "moderate";
      state.currentWeather.uvDescriptor = "Moderate";

      break;
    case 8 || 10:
      state.currentWeather.uvIndex = uvIndex;
      state.currentWeather.uvSeverity = "dangerous";
      state.currentWeather.uvDescriptor = "High";
      break;
    case 11:
      state.currentWeather.uvIndex = uvIndex;
      state.currentWeather.uvSeverity = "hazardous";
      state.currentWeather.uvDescriptor = "Extreme";
      break;
    default:
      state.currentWeather.uvIndex = uvIndex;
      state.currentWeather.uvSeverity = "hazardous";
      state.currentWeather.uvDescriptor = "Extreme";
  }

  state.currentWeather.airQualityPM = data.current.air_quality.pm2_5;

  //-----STORING MORNING, AFTERNOON, EVENING & NIGHT TEMPS-----
  state.currentWeather.morningTemp =
    data.forecast.forecastday[0].hour[6].temp_f;
  state.currentWeather.afternoonTemp =
    data.forecast.forecastday[0].hour[12].temp_f;
  state.currentWeather.eveningTemp =
    data.forecast.forecastday[0].hour[18].temp_f;
  state.currentWeather.nightTemp = data.forecast.forecastday[0].hour[23].temp_f;

  //-----STORING TOMORROW TEMP-----
  state.tomorrowWeather.temp = data.forecast.forecastday[1].day.avgtemp_f;
  state.tomorrowWeather.description =
    data.forecast.forecastday[1].day.condition.text;
  state.tomorrowWeather.high = data.forecast.forecastday[1].day.maxtemp_f;
  state.tomorrowWeather.low = data.forecast.forecastday[1].day.mintemp_f;

  //-----STORING +2 DAY INFO-----
  state.secondDay.description = data.forecast.forecastday[2].day.condition.text;
  state.secondDay.high = data.forecast.forecastday[2].day.maxtemp_f;
  state.secondDay.low = data.forecast.forecastday[2].day.mintemp_f;
};

export const resetState = function () {
  state.location = {};
  state.currentWeather = {};
  state.tomorrowWeather = {};
  state.secondDay = {};
};
