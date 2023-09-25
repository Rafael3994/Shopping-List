import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyListComponent } from './components/my-list/my-list.component';
import { MyListRoutingModule } from './my-list-routing.module';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { FormsModule } from '@angular/forms';
import { ModalCleanListComponent } from 'src/app/components/modal-clean-list/modal-clean-list.component';
import { ModalDetailsProductComponent } from 'src/app/components/modal-details-product/modal-details-product.component';

@NgModule({
  declarations: [
    MyListComponent, ModalCleanListComponent, ModalDetailsProductComponent,
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    MyListRoutingModule,
    FormsModule,
  ],
})
export class MyListModule { }
