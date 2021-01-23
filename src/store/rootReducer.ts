import { pokedexOverviewReducer } from "./pokedex-overview/reducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  pokedexOverview: pokedexOverviewReducer,
});

export default rootReducer;
