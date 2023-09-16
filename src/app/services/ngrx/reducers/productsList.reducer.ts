import { createReducer, on } from '@ngrx/store';
import { update, reset } from './../actions/productsList.actions';

export const initialState = 0;

export const productListReducer = createReducer(
  initialState,
  on(update, (state) => state + 1),
  on(reset, (state) => 0)
);