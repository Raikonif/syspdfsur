import React, { createContext, ReactNode, useReducer } from "react";

// interface IHomeState {
//
// }
const HomeContext = createContext<null>(null);
export const HomeContextProvider = createContext({
  openSignOutModal: () => ({}),
  onCloseSignOut: () => ({}),
  openProfileModal: () => ({}),
});
