export interface PokedexOverviewState{
    loading: boolean;
    error?: Error;
    success: boolean;
}

class DefaultPokedexOverviewState implements PokedexOverviewState {
    loading = false;
    success = false;
};

export const initDefaultPokedexOverviewState = () => new DefaultPokedexOverviewState();