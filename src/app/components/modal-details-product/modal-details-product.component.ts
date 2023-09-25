import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductDTO } from 'src/app/modules/products/product.DTO';

@Component({
  selector: 'app-modal-details-product',
  templateUrl: './modal-details-product.component.html',
  styleUrls: ['./modal-details-product.component.scss']
})
export class ModalDetailsProductComponent implements OnInit {

  isHoverBtnRest: boolean = false;

  @Input() isShowModalProductDetails: boolean;
  @Input() itemSelect: ProductDTO | null;

  @Output() eventCloseProductDetailsModal = new EventEmitter<void>();
  @Output() eventSumUnit = new EventEmitter<void>();
  @Output() eventRestUnit = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {
  }

  closeCleanListModal() {
    this.eventCloseProductDetailsModal.emit();
  }  

  sumUnit() {
    this.eventSumUnit.emit();
  }

  restUnit() {
    this.eventRestUnit.emit();
  }
}
