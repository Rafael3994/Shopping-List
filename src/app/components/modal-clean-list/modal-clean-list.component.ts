import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { ProductDTO } from 'src/app/modules/products/product.DTO';
import { update } from 'src/app/services/ngrx/actions/productsList.actions';

@Component({
  selector: 'app-modal-clean-list',
  templateUrl: './modal-clean-list.component.html',
  styleUrls: ['./modal-clean-list.component.scss']
})
export class ModalCleanListComponent implements OnInit {

  @Input() isShowModalCleanList: boolean;
  @Input() isShowModalDeleteProduct: boolean;
  @Input() productList: ProductDTO[];
  @Input() indexLastProductSelected: number;
  @Input() indexProduct: number | null;
  @Input() dataSource: MatTableDataSource<ProductDTO>;

  @Output() eventCloseCleanListModal = new EventEmitter();
  @Output() eventCleanList = new EventEmitter();

  constructor(private store: Store<{ productsListSelected: ProductDTO[] }>) { }

  closeCleanListModal() {
      this.eventCloseCleanListModal.emit();
  }
  cleanList() {
    this.eventCleanList.emit();
  }


  ngOnInit(): void {
  }

}
