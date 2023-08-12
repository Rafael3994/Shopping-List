import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Categories, ProductsDTO } from 'src/app/modules/products/products.DTO';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
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
  isDeleteSelect: boolean = false;
  indexProduct: number | null = null;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

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

  showModal(e: Event, isChecked: boolean, index: number) {
    e.stopPropagation();
    if(isChecked) return;
    this.indexProduct = index;
    // document.getElementById('container')?.addEventListener('focus', (e) => e.preventDefault());
    this.isDeleteSelect = !this.isDeleteSelect;
  }

  deleteProduct() {
    if (this.indexProduct !== null) {
      this.products.splice(this.indexProduct, 1);
      this.dataSource = new MatTableDataSource(this.products);
      this.closeModal();
    }
  }

  closeModal() {
    this.indexProduct = null;
    this.isDeleteSelect = false;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  styles = {}
}