import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Import Ngrx
import { ActionReducer, MetaReducer, StoreModule } from '@ngrx/store';
import { productListReducer } from './services/ngrx/reducers/productsList.reducer';
import { localStorageSync } from 'ngrx-store-localstorage';

// Import modules
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';

// Import components
import { BaseComponent } from './components/base/base.component';
import { LOCAL_STORAGE_KEY } from './services/getLocalStorage';

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({keys: [LOCAL_STORAGE_KEY]})(reducer);
}
const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

@NgModule({
  declarations: [AppComponent, BaseComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ productsListSelected: productListReducer }, { metaReducers }),
    AngularMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
