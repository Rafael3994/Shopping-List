import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Categories, ProductsDTO } from '../../products.DTO';

export interface Card {
  title: string;
  subtitle: string;
  text: string;
}

const products = [
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
  {
    id: 3,
    isChecked: false,
    delete: 'delete',
    name: 'Atun en Lata',
    category: Categories.MeatFishAndEggs,
    brand: 'Nixe',
    price: 0.90,
    units: 3,
    formatSize: '',
    marked: '',
    image: '',
  },
  {
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
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

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  obs: Observable<any>;
  dataSource: MatTableDataSource<ProductsDTO> = new MatTableDataSource<ProductsDTO>(products);
  columns: number;

  constructor(private changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.columns = (window.innerWidth <= 400) ? 1 : (window.innerWidth <= 800) ? 3 : 5 ; 
    this.changeDetectorRef.detectChanges();
    this.dataSource.paginator = this.paginator;
    this.obs = this.dataSource.connect();
  }

  ngOnDestroy() {
    if (this.dataSource) { 
      this.dataSource.disconnect(); 
    }
  }
 
  handleResize(event: UIEvent) { 
    const window = event.target as Window; 
    this.columns = (window.innerWidth <= 400) ? 1 : (window.innerWidth <= 800) ? 3 : 5; 
  }
}
