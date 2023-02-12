import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo:'my-list'},
  { 
    path: 'my-list',
    loadChildren: () => import('./modules/my-list/my-list.module').then(m => m.MyListModule),
    data: {
      preload: true
    }
  },
  { 
    path: 'products',
    loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule),
    data: {
      preload: true
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
