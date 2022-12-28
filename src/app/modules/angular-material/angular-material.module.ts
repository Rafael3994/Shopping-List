import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Imports from Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    MatToolbarModule,
    MatSelectModule,
    MatSlideToggleModule,
    CdkAccordionModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
  ],
})
export class AngularMaterialModule {}
