import { PokedexOverviewState } from "./state";
import { isLoading, isLoadingSuccessfull } from "./selectors";

const testState: PokedexOverviewState = {
  loading: false,
  success: true,
};

describe("Selectors: pokedex-overview", () => {
  test("should return the loading state when isLoading is called", () =>
    expect(isLoading(testState)).toBe(false));
  test("should return true when success is true an no error is set when isLoadingSuccessfull is called", () =>
    expect(isLoadingSuccessfull(testState)).toBe(true));
  test("should return false when success is true but an error is set when isLoadingSuccessfull is called", () =>
    expect(
      isLoadingSuccessfull({ ...testState, error: Error("foo error") })
    ).toBe(false));
});
