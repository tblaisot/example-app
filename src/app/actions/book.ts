import {Book} from "../models/book";
import {actionCreatorFactory, AsyncActionCreators, ActionCreator} from "ngrx-store-fsa-helpers";


const actionCreator = actionCreatorFactory('[Book]');

export const searchBookAction: AsyncActionCreators<string, Book[], undefined> = actionCreator.async<string, Book[], undefined>('Search Book');
export const selectBookAction: ActionCreator<string> = actionCreator<string>('Select Book');
export const loadBookAction: ActionCreator<Book> = actionCreator<Book>('Load Book');
