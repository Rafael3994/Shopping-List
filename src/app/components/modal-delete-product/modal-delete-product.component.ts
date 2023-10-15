import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-delete-product',
  templateUrl: './modal-delete-product.component.html',
  styleUrls: ['./modal-delete-product.component.scss']
})
export class ModalDeleteProductComponent implements OnInit {

  @Input() isShowModalDeleteProduct: boolean;

  @Output() eventCloseDeleteModal = new EventEmitter();
  @Output() eventDeleteProduct = new EventEmitter();

  constructor() { }

  closeDeleteProductModal() {
    this.eventCloseDeleteModal.emit();
  }

  deleteProduct() {
    this.eventDeleteProduct.emit();
  }

  ngOnInit(): void {
  }

}
