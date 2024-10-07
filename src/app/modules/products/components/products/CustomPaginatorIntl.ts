import { Injectable } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class CustomPaginatorIntl extends MatPaginatorIntl {
  constructor(private translate: TranslateService) {
    super();
    this.setTranslations();
    this.translate.onLangChange.subscribe(() => {
      this.setTranslations();
    });

  }
  setTranslations() {
    this.itemsPerPageLabel = this.translate.instant('OTHERS.ITEMS_PER_PAGE');
    this.changes.next();
  }
}
