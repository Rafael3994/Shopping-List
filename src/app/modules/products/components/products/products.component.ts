import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Categories, ProductDTO as ProductDTO } from '../../product.DTO';

export interface Card {
  title: string;
  subtitle: string;
  text: string;
}

const products: ProductDTO[] = [
  {
    id: 1,
    isChecked: false,
    delete: 'delete',
    name: 'Leche Semidesnatada',
    category: Categories.Dairy,
    brand: 'Mercadona',
    price: 1.20,
    units: 0,
    formatSize: 'Pack 6u.',
    marked: 'Mercadona',
    image: '',
  },
  {
    id: 2,
    isChecked: false,
    delete: 'delete',
    name: 'Pan de Molde Integral',
    category: Categories.CerealsSugarAndSweets,
    brand: 'Hacendado',
    price: 6.99,
    units: 0,
    formatSize: '',
    marked: '',
    image: '',
  },
  {
    id: 3,
    isChecked: false,
    delete: 'delete',
    name: 'Arroz Basmati',
    category: Categories.CerealsSugarAndSweets,
    brand: 'Hacendado',
    price: 2.00,
    units: 0,
    formatSize: '',
    marked: 'Mercadona',
    image: '',
  },
  {
    id: 4,
    isChecked: false,
    delete: 'delete',
    name: 'Atun en Lata',
    category: Categories.MeatFishAndEggs,
    brand: 'Nixe',
    price: 0.90,
    units: 0,
    formatSize: '',
    marked: '',
    image: '',
  },
  {
    id: 5,
    isChecked: false,
    delete: 'delete',
    name: 'Yogur Natural',
    category: Categories.Dairy,
    brand: 'Hacendado',
    price: 0.80,
    units: 0,
    formatSize: '',
    marked: '',
    image: '',
  },
  {
    id: 6,
    isChecked: false,
    delete: 'delete',
    name: 'Spaghetti',
    category: Categories.CerealsSugarAndSweets,
    brand: 'Hacendado',
    price: 1.00,
    units: 0,
    formatSize: '',
    marked: '',
    image: '',
  },
  {
    id: 7,
    isChecked: false,
    delete: 'delete',
    name: 'Patatas Fritas',
    category: Categories.Vegetables,
    brand: 'Torres',
    price: 1.80,
    units: 0,
    formatSize: '',
    marked: 'Mercadona',
    image: '',
  },
  {
    id: 8,
    isChecked: false,
    delete: 'delete',
    name: 'Agua Mineral',
    category: Categories.NaturalProducts,
    brand: 'Hacendado',
    price: 3.15,
    units: 0,
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
  dataSource: MatTableDataSource<ProductDTO> = new MatTableDataSource<ProductDTO>(products);
  columns: number;
  list: ProductDTO[] = [];

  constructor(private changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.columns = this.resizeCondition();
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
    this.columns = this.resizeCondition();
  }

  resizeCondition() {
    return (window.innerWidth <= 628) ? 1 : (window.innerWidth <= 930) ? 2 : (window.innerWidth <= 1238) ? 3 : (window.innerWidth <= 1540) ? 4 : 5;
  }

  addProductToTheList(productSelected: ProductDTO) {
    // Modify units
    productSelected.units++;
    // If the product is not in the list add
    // If exist modify the product
    const indexProduct = this.list.findIndex(product => product.id === productSelected.id);
    if (!(indexProduct > -1)) {
      this.list.push(productSelected);
    } else {
      this.list[indexProduct].units = productSelected.units;
    }
  }

  restProductToTheList(productSelected: ProductDTO) {
    productSelected.units--;
    // If the units of the product is 0 remove from de list
    // If not modify the product
    const indexProduct = this.list.findIndex(product => product.id === productSelected.id);
    if (productSelected.units === 0) {
      this.list.splice(indexProduct, 1)
    } else {
      this.list[indexProduct].units = productSelected.units;
    }    
  }
}
