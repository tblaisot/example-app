import {reducerWithInitialState, ReducerBuilder} from "ngrx-store-fsa-helpers";
import * as layout from "../actions/layout";


export interface State {
  showSidenav: boolean;
}

const initialState: State = {
  showSidenav: false,
};

export const reducer: ReducerBuilder<State, State> = reducerWithInitialState(initialState)
  .case(layout.openSidenavAction, (state: State): State => {
    return {
      showSidenav: true
    };
  })
  .case(layout.closeSidenavAction, (state: State): State => {
    return {
      showSidenav: false
    };
  });

export const getShowSidenav = (state: State) => state.showSidenav;
