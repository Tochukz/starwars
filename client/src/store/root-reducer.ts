import { combineReducers } from "@reduxjs/toolkit";

import { peopleSlice } from './slices/people.slice';

export const rootReducer = combineReducers({
  people: peopleSlice
});