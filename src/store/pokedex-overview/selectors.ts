import { PokedexOverviewState } from "./state";
export const isLoading = (state: PokedexOverviewState) => state.loading;
export const isLoadingSuccessfull = (state: PokedexOverviewState) =>
  state.success && !state.error;
