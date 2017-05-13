import {reducerWithInitialState, ReducerBuilder, SuccessFSAPayload, FailureFSAPayload} from "ngrx-store-fsa-helpers";
import * as collection from "../actions/collection";
import {Book} from "../models/book";


export interface State {
  loaded: boolean;
  loading: boolean;
  ids: string[];
}


const initialState: State = {
  loaded: false,
  loading: false,
  ids: []
};

const handleLoadingCollection = (state: State): State => {
  return Object.assign({}, state, {
    loading: true
  });
};

const handleLoadCollection = (state: State, {result}: SuccessFSAPayload<undefined, Book[]>): State => {
  return {
    loaded: true,
    loading: false,
    ids: result.map(book => book.id)
  };
};

const addBookIdToCollection = (state: State, book: Book): State => {
  if (state.ids.indexOf(book.id) > -1) {
    return state;
  }

  return Object.assign({}, state, {
    ids: [...state.ids, book.id]
  });
};

const handleAddBookToCollection = (state: State, {params}: SuccessFSAPayload<Book, undefined>): State => {
  return addBookIdToCollection(state, params);
};

const handleRemoveBookToCollectionFailure = (state: State, {params}: FailureFSAPayload<Book, undefined>): State => {
  return addBookIdToCollection(state, params);
};

const removeBookIdToCollection = (state: State, book: Book): State => {

  return Object.assign({}, state, {
    ids: state.ids.filter(id => id !== book.id)
  });
};

const handleAddBookToCollectionFailure = (state: State, {params}: FailureFSAPayload<Book, undefined>): State => {
  return removeBookIdToCollection(state, params);
};

const handleRemoveBookToCollection = (state: State, {params}: SuccessFSAPayload<Book, undefined>): State => {
  return removeBookIdToCollection(state, params);
};


export const reducer: ReducerBuilder<State, State> = reducerWithInitialState(initialState)
  .case(collection.loadCollectionAction.started, handleLoadingCollection)
  .case(collection.loadCollectionAction.done, handleLoadCollection)
  .case(collection.addBookToCollectionAction.done, handleAddBookToCollection)
  .case(collection.removeBookFromCollectionAction.failed, handleRemoveBookToCollectionFailure)
  .case(collection.addBookToCollectionAction.failed, handleAddBookToCollectionFailure)
  .case(collection.removeBookFromCollectionAction.done, handleRemoveBookToCollection);


export const getLoaded = (state: State) => state.loaded;

export const getLoading = (state: State) => state.loading;

export const getIds = (state: State) => state.ids;
