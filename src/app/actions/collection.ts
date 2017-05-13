import {actionCreatorFactory, AsyncActionCreators} from "ngrx-store-fsa-helpers";
import {Book} from "../models/book";


const actionCreator = actionCreatorFactory('[Collection]');

export const addBookToCollectionAction: AsyncActionCreators<Book, undefined, undefined> = actionCreator.async<Book, undefined, undefined>('Add Book');
export const removeBookFromCollectionAction: AsyncActionCreators<Book, undefined, undefined> = actionCreator.async<Book, undefined, undefined>('Remove Book');
export const loadCollectionAction: AsyncActionCreators<undefined, Book[], Error> = actionCreator.async<undefined, Book[], Error>('Load');
