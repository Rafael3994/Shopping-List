import { createAction, props } from '@ngrx/store';
import { ProductDTO } from 'src/app/modules/products/product.DTO';

export const actionsType = {
    Update: 'update',
    Reset: 'reset',
}

export const update = createAction(actionsType.Update, props<{ productsListSelected: ProductDTO[] }>());
export const reset = createAction(actionsType.Reset);