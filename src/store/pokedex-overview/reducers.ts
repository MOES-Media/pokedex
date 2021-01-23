import { PokedexOverviewActions, PokedexOverviewActionTypes } from "./actions";
import { PokedexOverviewState, initDefaultPokedexOverviewState } from "./state";

export const pokedexOverviewReducer = (
  state: PokedexOverviewState = initDefaultPokedexOverviewState(),
  action: PokedexOverviewActions
): PokedexOverviewState => {
  switch (action.type) {
    case PokedexOverviewActionTypes.LOAD:
      return { ...state, loading: true, error: undefined, success: false };
    case PokedexOverviewActionTypes.LOAD_SUCCESS:
      return { ...state, loading: false, success: true, error: undefined };
    case PokedexOverviewActionTypes.LOAD_ERROR:
      return { ...state, loading: false, success: false, error: action.error };
    default:
      return state;
  }
};

export default pokedexOverviewReducer;