import {actionCreatorFactory, ActionCreator} from "ngrx-store-fsa-helpers";


const actionCreator = actionCreatorFactory('[Layout]');

export const openSidenavAction: ActionCreator<undefined> = actionCreator<undefined>('Open Sidenav');
export const closeSidenavAction: ActionCreator<undefined> = actionCreator<undefined>('Close Sidenav');
