import "core-js/stable";
import "regenerator-runtime/runtime";

import * as model from "./model";
import searchView from "./views/searchView";
import mainInfoView from "./views/mainInfoView";
import dayTemperaturesView from "./dayTemperaturesView";
import tomorrowView from "./views/tomorrowView";
import uvView from "./views/uvView";
import predictionView from "./views/predictionView";

const searchController = async function () {
  const query = searchView.getQuery();

  model.resetState();
  await model.setState(query);

  searchView.renderInfo(model.state);
  mainInfoView.renderInfo(model.state);
  dayTemperaturesView.renderInfo(model.state);
  tomorrowView.renderInfo(model.state);
  uvView.renderInfo(model.state);
  predictionView.renderInfo(model.state);
};

const init = function () {
  searchView.addHandlerQuery(searchController);
};
init();
