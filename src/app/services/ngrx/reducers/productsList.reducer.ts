import { createReducer, on, createSelector } from '@ngrx/store';
import { update, reset } from './../actions/productsList.actions';
import { Categories, ProductDTO } from 'src/app/modules/products/product.DTO';

export const initialState: ProductDTO[] = [];

export const productListReducer = createReducer(
  initialState,
  on(update, (state, { productsListSelected }) => {
  return productsListSelected;
}),
  on(reset, (state) => [])
);