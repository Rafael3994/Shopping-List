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

export class MyListComponent implements AfterViewInit {
  displayedColumns: string[] = ['check', 'name', 'category', 'brand', 'price', 'units', 'delete'];
  dataSource: MatTableDataSource<ProductsDTO>;
  checked = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    const products: ProductsDTO[] = [
      {
        isChecked: false,
        delete: 'delete',
        name: 'Queso en lonchas',
        category: 'Lactio',
        brand: 'Hacendado',
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
    this.dataSource = new MatTableDataSource(products);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  styles = {


  }
}