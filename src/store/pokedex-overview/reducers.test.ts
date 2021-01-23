import { LoadPokedexOverview, LoadPokedexOverviewError, LoadPokedexOverviewSuccess } from "./actions";
import { pokedexOverviewReducer } from "./reducers";
import { initDefaultPokedexOverviewState } from "./state";
describe("Reducer: pokedex-overview", () => {
  test("should return the same state when an unknown action arrives", () => {
    const unknownAction = { type: "UNKNOWN" } as any;
    expect(pokedexOverviewReducer(undefined, unknownAction)).toEqual(
      initDefaultPokedexOverviewState()
    );
  });

  test("should set loading to true when the loading action arrives", () => {
    const loadingAction = new LoadPokedexOverview();
    expect(pokedexOverviewReducer(undefined, loadingAction)).toEqual({
      ...initDefaultPokedexOverviewState(),
      loading: true,
      success: false,
      error: undefined,
    });
  });

  test("should set success to true and loading to false when load success arrives", () => {
    const loadingSuccess = new LoadPokedexOverviewSuccess();
    expect(pokedexOverviewReducer(undefined, loadingSuccess)).toEqual({
      ...initDefaultPokedexOverviewState(),
      loading: false,
      success: true,
      error: undefined,
    });
  });

  it("should set the error when load error arrives", () => {
    const expectedError = new Error("foo error");
    const loadError = new LoadPokedexOverviewError(expectedError);
    expect(pokedexOverviewReducer(undefined, loadError)).toEqual({
      ...initDefaultPokedexOverviewState(),
      loading: false,
      success: false,
      error: expectedError,
    });
  });
});
