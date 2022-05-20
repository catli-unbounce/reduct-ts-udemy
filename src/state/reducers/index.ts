import { combineReducers } from "redux";
import repositoriesReducer from "./repositoriesReducer";

//Our state inside redux store is an object with "repositories" property

const reducers = combineReducers({
  repositories: repositoriesReducer,
});

export default reducers;

//ReturnType is a TS helper that gives us the type structure of reducers
export type RootState = ReturnType<typeof reducers>;
