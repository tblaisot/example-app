import {reducerWithInitialState, ReducerBuilder, SuccessFSAPayload} from "ngrx-store-fsa-helpers";
import * as book from "../actions/book";
import {Book} from "../models/book";


export interface State {
  ids: string[];
  loading: boolean;
  query: string;
}

const initialState: State = {
  ids: [],
  loading: false,
  query: ''
};

export const reducer: ReducerBuilder<State, State> = reducerWithInitialState(initialState)
  .case(book.searchBookAction.started, (state: State, query: string): State => {
    if (query === '') {
      return {
        ids: [],
        loading: false,
        query
      };
    }

    return Object.assign({}, state, {
      query,
      loading: true
    });
  })
  .case(book.searchBookAction.done, (state: State, {result}: SuccessFSAPayload<string, Book[]>): State => {
    const books = result;

    return {
      ids: books.map(book => book.id),
      loading: false,
      query: state.query
    };
  });


export const getIds = (state: State) => state.ids;

export const getQuery = (state: State) => state.query;

export const getLoading = (state: State) => state.loading;
