import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ProductsDTO } from 'src/app/modules/products/products.DTO';
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
        name: 'Queso en lonchas',
        category: 'Lactio',
        brand: 'Bosque verde',
        price: 4.49,
        units: 2,
        formatSize: '',
        marked: '',
        image: '',
      },
      {
        isChecked: false,
        delete: 'delete',
        name: 'Queso en cuña',
        category: 'Lactio',
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
        name: 'Queso cremoso',
        category: 'Lactio',
        brand: 'Hacendado',
        price: 3.15,
        units: 3,
        formatSize: '',
        marked: '',
        image: '',
      },
      {
        isChecked: true,
        delete: 'delete',
        name: 'Queso cremoso',
        category: 'Lactio',
        brand: 'Hacendado',
        price: 3.15,
        units: 3,
        formatSize: '',
        marked: '',
        image: '',
      },
      {
        isChecked: false,
        delete: 'delete',
        name: 'Queso cremoso',
        category: 'Lactio',
        brand: 'Hacendado',
        price: 3.15,
        units: 3,
        formatSize: '',
        marked: '',
        image: '',
      },
      {
        isChecked: false,
        delete: 'delete',
        name: 'Queso cremoso',
        category: 'Lactio',
        brand: 'Hacendado',
        price: 3.15,
        units: 3,
        formatSize: '',
        marked: '',
        image: '',
      },
      {
        isChecked: false,
        delete: 'delete',
        name: 'Queso cremoso',
        category: 'Lactio',
        brand: 'Hacendado',
        price: 3.15,
        units: 3,
        formatSize: '',
        marked: '',
        image: '',
      },
      {
        isChecked: false,
        delete: 'delete',
        name: 'Queso cremoso',
        category: 'Lactio',
        brand: 'Hacendado',
        price: 3.15,
        units: 3,
        formatSize: '',
        marked: '',
        image: '',
      },
      {
        isChecked: false,
        delete: 'delete',
        name: 'Queso cremoso',
        category: 'Lactio',
        brand: 'Hacendado',
        price: 3.15,
        units: 3,
        formatSize: '',
        marked: '',
        image: '',
      },
      {
        isChecked: false,
        delete: 'delete',
        name: 'Queso cremoso',
        category: 'Lactio',
        brand: 'Hacendado',
        price: 3.15,
        units: 3,
        formatSize: '',
        marked: '',
        image: '',
      },
      {
        isChecked: false,
        delete: 'delete',
        name: 'Queso cremoso',
        category: 'Lactio',
        brand: 'Hacendado',
        price: 3.15,
        units: 3,
        formatSize: '',
        marked: '',
        image: '',
      },
      {
        isChecked: false,
        delete: 'delete',
        name: 'Queso cremoso',
        category: 'Lactio',
        brand: 'Hacendado',
        price: 3.15,
        units: 3,
        formatSize: '',
        marked: '',
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