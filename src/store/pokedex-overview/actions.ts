import { Action } from "redux";

export enum PokedexOverviewActionTypes {
  LOAD = "[Pokedex overview] LOADING",
  LOAD_SUCCESS = "[Pokedex overview] LOADING SUCCESS",
  LOAD_ERROR = "[Pokedex overview] LOADING ERROR",
}

export class LoadPokedexOverview implements Action {
  readonly type = PokedexOverviewActionTypes.LOAD;
}

export class LoadPokedexOverviewSuccess implements Action {
  readonly type = PokedexOverviewActionTypes.LOAD_SUCCESS;
}

export class LoadPokedexOverviewError implements Action {
  readonly type = PokedexOverviewActionTypes.LOAD_ERROR;
  constructor(public error: Error) {}
}

export type PokedexOverviewActions =
  | LoadPokedexOverview
  | LoadPokedexOverviewSuccess
  | LoadPokedexOverviewError;
