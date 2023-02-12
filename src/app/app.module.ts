import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Import modules
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';

// Import components
import { BaseComponent } from './components/base/base.component';
import { MyListModule } from './modules/my-list/my-list.module';

@NgModule({
  declarations: [AppComponent, BaseComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    MyListModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
