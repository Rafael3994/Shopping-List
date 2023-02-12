import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyListComponent } from './components/my-list/my-list.component';
import { MyListRoutingModule } from './my-list-routing.module';



@NgModule({
  declarations: [
    MyListComponent
  ],
  imports: [
    CommonModule,
    MyListRoutingModule,
  ],
})
export class MyListModule { }
