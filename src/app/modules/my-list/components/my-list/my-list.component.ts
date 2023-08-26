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
  isShowModalProductDetails: boolean = false
  indexProduct: number | null = null;
  valueFilterText: string = '';
  itemSelect: ProductsDTO | null = null;
  totalAmount: number = 0;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild('empTbSort') empTbSort = new MatSort();
  @ViewChild('input') input: any;

  ngAfterViewInit() {
    this.dataSource.sort = this.empTbSort;
  }

  constructor() {
    this.products = [
      {
        id: 0,
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
        id: 1,
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
        id: 2,
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
      // {
      //   id: 3,
      //   isChecked: false,
      //   delete: 'delete',
      //   name: 'Atun en Lata',
      //   category: Categories.MeatFishAndEggs,
      //   brand: 'Nixe',
      //   price: 0.90,
      //   units: 3,
      //   formatSize: '',
      //   marked: '',
      //   image: '',
      // },
      // {
      //   id: 4,
      //   isChecked: false,
      //   delete: 'delete',
      //   name: 'Yogur Natural',
      //   category: Categories.Dairy,
      //   brand: 'Hacendado',
      //   price: 0.80,
      //   units: 3,
      //   formatSize: '',
      //   marked: '',
      //   image: '',
      // },
      // {
      //   id: 5,
      //   isChecked: false,
      //   delete: 'delete',
      //   name: 'Spaghetti',
      //   category: Categories.CerealsSugarAndSweets,
      //   brand: 'Hacendado',
      //   price: 1.00,
      //   units: 3,
      //   formatSize: '',
      //   marked: '',
      //   image: '',
      // },
      // {
      //   id: 6,
      //   isChecked: false,
      //   delete: 'delete',
      //   name: 'Patatas Fritas',
      //   category: Categories.Vegetables,
      //   brand: 'Torres',
      //   price: 1.80,
      //   units: 1,
      //   formatSize: '',
      //   marked: 'Mercadona',
      //   image: '',
      // },
      // {
      //   id: 7,
      //   isChecked: false,
      //   delete: 'delete',
      //   name: 'Agua Mineral',
      //   category: Categories.NaturalProducts,
      //   brand: 'Hacendado',
      //   price: 3.15,
      //   units: 3,
      //   formatSize: '1.5L',
      //   marked: 'Mercadona',
      //   image: '',
      // },
    ]

    this.totalAmount = +this.sumAmount().toFixed(2);
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.products);
  }

  showModalProductDetails(event: any, item?: ProductsDTO) {
    event.stopPropagation();
    this.itemSelect = item!;    
    this.isShowModalProductDetails = !this.isShowModalProductDetails;
  }

  sumAmount(): number {
    return this.products.reduce((amount: number, product: ProductsDTO) => {
      const units = product.units ?? 1
      return amount + (product!.price * units)
    }, 0)
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
      this.products.splice(this.products.findIndex((product) => product.id === this.indexProduct), 1);
      this.dataSource = new MatTableDataSource(this.products);
      this.totalAmount = +this.sumAmount().toFixed(2);
      this.closeDeleteProductModal();

      // Are there some isChecked in false?
    const isCheckFalse = this.products.some((item: ProductsDTO) => {
      if (!item.isChecked) {
        return true;
      } else {
        return false;
      }
    });
    
    if(!isCheckFalse) {
      this.isShowModalCleanList = true;
    }
  }

  checkChange(event: any, index: number) {
    event.stopPropagation();
    this.indexProduct = index;

    // I make this because there are a delay to change
    const realCheckBox = !this.products.find((product) => product.id === index)?.isChecked
    // Are there some isChecked in false?
    const isCheckFalse = this.products.some((item: ProductsDTO) => {
      if (item.id === index && !realCheckBox) {
        return true;
      }
      if (item.id !== index && !item.isChecked) {
        return true;
      }
      return;
    });
    
    if(!isCheckFalse) {
      this.isShowModalCleanList = true;
    }
  }

  // Close delete product modal
  closeDeleteProductModal(): void {
    if (!this.isShowModalCleanList && !this.isShowModalDeleteProduct) {
      this.indexProduct = null;
    }
    this.isShowModalDeleteProduct = false;
  }

  // Close delete product modal
  closeCleanListModal(): void {   
    const productFound = this.products[this.products.findIndex((product) => product.id === this.indexProduct)];
    if(productFound) productFound.isChecked = false;

    if (!this.isShowModalCleanList && !this.isShowModalDeleteProduct) {
      this.indexProduct = null;
    }
    this.isShowModalCleanList = false;
  }

  closeProductDetailsModal(): void {
    this.isShowModalProductDetails = false;
  }

  cleanList(): void {
    this.products = [];
    this.dataSource = new MatTableDataSource(this.products);
    this.isShowModalCleanList = false;
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

  styles = {}
}