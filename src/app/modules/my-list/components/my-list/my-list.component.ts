import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Categories, ProductsDTO } from 'src/app/modules/products/products.DTO';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.scss']
})

export class MyListComponent {
  displayedColumns: string[] = ['check', 'name', 'category', 'brand', 'price', 'units', 'delete'];
  dataSource: MatTableDataSource<ProductsDTO>;
  products: ProductsDTO[];
  isShowModalDeleteProduct: boolean = false;
  isShowModalCleanList: boolean = false;
  indexProduct: number | null = null;
  valueFilterText: string = '';

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild('empTbSort') empTbSort = new MatSort();
  @ViewChild('input') input: any;

  ngAfterViewInit() {
    this.dataSource.sort = this.empTbSort;
  }

  constructor() {
    this.products = [
      {
        isChecked: false,
        delete: 'delete',
        name: 'Leche Semidesnatada',
        category: Categories.Dairy,
        brand: 'Mercadona',
        price: 1.20,
        units: 2,
        formatSize: 'Pack 6u.',
        marked: 'Mercadona',
        image: '',
      },
      {
        isChecked: false,
        delete: 'delete',
        name: 'Pan de Molde Integral',
        category: Categories.CerealsSugarAndSweets,
        brand: 'Hacendado',
        price: 6.99,
        units: 1,
        formatSize: '',
        marked: '',
        image: '',
      },
      {
        isChecked: false,
        delete: 'delete',
        name: 'Arroz Basmati',
        category: Categories.CerealsSugarAndSweets,
        brand: 'Hacendado',
        price: 2.00,
        units: 3,
        formatSize: '',
        marked: 'Mercadona',
        image: '',
      },
      {
        isChecked: false,
        delete: 'delete',
        name: 'Atún en Lata',
        category: Categories.MeatFishAndEggs,
        brand: 'Nixe',
        price: 0.90,
        units: 3,
        formatSize: '',
        marked: '',
        image: '',
      },
      {
        isChecked: false,
        delete: 'delete',
        name: 'Yogur Natural',
        category: Categories.Dairy,
        brand: 'Hacendado',
        price: 0.80,
        units: 3,
        formatSize: '',
        marked: '',
        image: '',
      },
      {
        isChecked: false,
        delete: 'delete',
        name: 'Spaghetti',
        category: Categories.CerealsSugarAndSweets,
        brand: 'Hacendado',
        price: 1.00,
        units: 3,
        formatSize: '',
        marked: '',
        image: '',
      },
      {
        isChecked: false,
        delete: 'delete',
        name: 'Patatas Fritas',
        category: Categories.Vegetables,
        brand: 'Torres',
        price: 1.80,
        units: 1,
        formatSize: '',
        marked: 'Mercadona',
        image: '',
      },
      {
        isChecked: false,
        delete: 'delete',
        name: 'Agua Mineral',
        category: Categories.NaturalProducts,
        brand: 'Hacendado',
        price: 3.15,
        units: 3,
        formatSize: '1.5L',
        marked: 'Mercadona',
        image: '',
      },
    ]

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.products);
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
    // document.getElementById('container')?.addEventListener('focus', (e) => e.preventDefault());
    this.isShowModalDeleteProduct = !this.isShowModalDeleteProduct;
  }

  // Delete Product
  deleteProduct(): void {
    if (this.indexProduct !== null) {
      this.products.splice(this.indexProduct, 1);
      this.dataSource = new MatTableDataSource(this.products);
      this.closeDeleteProductModal();
    }
  }

  // Check if all productes al check it
  isListComplited(event: any, index: number) {
    event.stopPropagation();
    this.indexProduct = index;
    const realCheckBox = !this.products[index].isChecked
    // Are there some false?
    const isCheckFalse = this.products.some((item: ProductsDTO, i: number) => {
      if (index === i && !realCheckBox) {
        return true;
      }
      if (index !== i && !item.isChecked) {
        return true;
      }
      return
    });

    if(!isCheckFalse) {
      this.isShowModalCleanList = true;
    }
  }

  // Close delete product modal
  closeDeleteProductModal(): void {
    this.indexProduct = null;
    this.isShowModalDeleteProduct = false;
  }

  // Close delete product modal
  closeCleanListModal(): void {    
    this.products[this.indexProduct!].isChecked = false;
    this.indexProduct = null;
    this.isShowModalCleanList = false;
  }

  cleanList(): void {
    this.products = [];
    this.dataSource = new MatTableDataSource(this.products);
    this.isShowModalCleanList = false;
  }

  closeAllModals(): void {
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

  styles = {}
}