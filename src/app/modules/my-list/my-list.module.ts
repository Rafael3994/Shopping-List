import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyListComponent } from './components/my-list/my-list.component';
import { MyListRoutingModule } from './my-list-routing.module';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { FormsModule } from '@angular/forms';
import { ModalCleanListComponent } from 'src/app/components/modal-clean-list/modal-clean-list.component';
import { ModalDetailsProductComponent } from 'src/app/components/modal-details-product/modal-details-product.component';
import { ModalDeleteProductComponent } from 'src/app/components/modal-delete-product/modal-delete-product.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    MyListComponent, ModalCleanListComponent, ModalDetailsProductComponent, ModalDeleteProductComponent,
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    MyListRoutingModule,
    FormsModule,
    TranslateModule,
  ],
})
export class MyListModule { }
