import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Categories, ProductDTO } from 'src/app/modules/products/product.DTO';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { update } from 'src/app/services/ngrx/actions/productsList.actions';
import { getLocalStogare, LOCAL_STORAGE_KEY } from 'src/app/services/getLocalStorage';

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.scss']
})
export class MyListComponent {
  displayedColumns: string[] = ['check', 'name', 'category', 'brand', 'price', 'units', 'delete'];
  dataSource: MatTableDataSource<ProductDTO>;
  products: ProductDTO[];
  
  isShowModalDeleteProduct: boolean = false;
  isShowModalCleanList: boolean = false;
  isShowModalProductDetails: boolean = false
  indexProduct: number | null = null;
  indexLastProductSelected: number | null = null;
  
  valueFilterText: string = '';
  itemSelect: ProductDTO | null = null;
  totalAmount: number = 0;
  productsListSelected$: Observable<ProductDTO[]>;
  productList: ProductDTO[] = [];
  translateCategoryProducts: string = 'PRODUCTS_CATEGORIES.'

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild('empTbSort') empTbSort = new MatSort();
  @ViewChild('input') input: any;

  ngAfterViewInit() {
    this.dataSource.sort = this.empTbSort;
  }

  constructor(private store: Store<{ productsListSelected: ProductDTO[] }>) {
    const infoLocalStorge = getLocalStogare();
    if (infoLocalStorge) store.dispatch(update({ productsListSelected: structuredClone(infoLocalStorge) }));
    this.productsListSelected$ = store.select(LOCAL_STORAGE_KEY);
    this.productsListSelected$.subscribe(res => this.productList = structuredClone(res));
    this.totalAmount = +this.sumAmount().toFixed(2);
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.productList);
  }

  showModalProductDetails(event: any, item?: ProductDTO) {
    event.stopPropagation();
    this.itemSelect = item!;
    this.isShowModalProductDetails = !this.isShowModalProductDetails;
  }

  sumAmount(): number {
    return this.productList.reduce((amount: number, product: ProductDTO) => {
      const units = product.units ?? 1
      return amount + (product!.price * units)
    }, 0)
  }

  restUnit(): void {
    this.itemSelect!.units! --;
    // If is negative puts 0
    if (this.itemSelect!.units! < 1) {
      this.itemSelect!.units = 1;
    }
    this.productList.find((product) => {
      if (product.id === this.itemSelect?.id) {
        product.units = this.itemSelect!.units
      }
    });
    this.store.dispatch(update({ productsListSelected: structuredClone(this.productList) }));
    this.totalAmount = +this.sumAmount().toFixed(2);
  }

  sumUnit(): void {
    this.itemSelect!.units! ++;
    this.productList.find((product) => {
      if (product.id === this.itemSelect?.id) {
        product.units = this.itemSelect!.units
      }
    });
    this.store.dispatch(update({ productsListSelected: structuredClone(this.productList) }));
    this.totalAmount = +this.sumAmount().toFixed(2);
  }

  cleanInputFilter(event: any): void {
    event.stopPropagation();
    this.dataSource.filter = '';
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
    this.valueFilterText = '';
  }

  // Show Delete Product Modal
  showDeleleProductModal(e: Event, isChecked: boolean, index: number): void {
    e.stopPropagation();
    if (isChecked) return;
    this.indexProduct = index;
    this.isShowModalDeleteProduct = !this.isShowModalDeleteProduct;
  }

  // Delete Product
  deleteProduct(): void {
    this.productList.splice(this.productList.findIndex((product) => product.id === this.indexProduct), 1);
    this.dataSource = new MatTableDataSource(this.productList);
    this.totalAmount = +this.sumAmount().toFixed(2);
    this.closeDeleteProductModal();

    // Are there some isChecked in false?
    const isCheckFalse = this.productList.some((item: ProductDTO) => {
      if (!item.isChecked) {
        return true;
      } else {
        return false;
      }
    });

    if (!isCheckFalse) {
      this.isShowModalCleanList = true;
    }
    this.store.dispatch(update({ productsListSelected: structuredClone(this.productList) }));
  }

  checkChange(event: any, index: number) {
    event.stopPropagation();
    this.indexProduct = index;
    // I make this because there are a delay to change
    const realCheckBox = !this.productList.find((product) => product.id === index)?.isChecked;
    // If is check save the last index product selected
    if (realCheckBox) this.indexLastProductSelected = index;

    // Are there some isChecked in false?
    const isCheckFalse = this.productList.some((item: ProductDTO) => {
      if (item.id === index && !realCheckBox) {
        return true;
      }
      if (item.id !== index && !item.isChecked) {
        return true;
      }
      return;
    });
    if (!isCheckFalse) {
      this.isShowModalCleanList = true;
    }
    const productListCopy = structuredClone(this.productList);
    productListCopy.find((product) => { if (product.id === index) { product.isChecked = realCheckBox } });
    this.store.dispatch(update({ productsListSelected: structuredClone(productListCopy) }));
  }

  // Close delete product modal
  closeDeleteProductModal(): void {
    if (!this.isShowModalCleanList && !this.isShowModalDeleteProduct) {
      this.indexProduct = null;
    }
    this.isShowModalDeleteProduct = false;
  }

  // Close detail product modal
  closeProductDetailsModal(): void {
    this.itemSelect = null;
    this.isShowModalProductDetails = false;
  }

  cleanList(): void {
    this.store.dispatch(update({ productsListSelected: structuredClone([]) }));
    this.dataSource = new MatTableDataSource(this.productList);
    this.totalAmount = +this.sumAmount().toFixed(2);
    this.isShowModalCleanList = false;
    this.indexLastProductSelected = null;
    this.indexProduct = null;
  }

  // Close delete product modal
  closeCleanListModal(): void {
    const index = this.productList.findIndex((product) => product.id === this.indexLastProductSelected);
    if (index === -1) return;
    this.productList[index].isChecked = false;

    if (!this.isShowModalCleanList && !this.isShowModalDeleteProduct) {
      this.indexProduct = null;
    }
    this.isShowModalCleanList = false;
    this.dataSource = new MatTableDataSource(this.productList);
    this.store.dispatch(update({ productsListSelected: structuredClone(this.productList) }));
  }

  closeAllModals(): void {
    this.closeCleanListModal();
    this.closeProductDetailsModal();
    this.closeDeleteProductModal();
  }

  // Filter products
  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}