import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { update } from './../../../../services/ngrx/actions/productsList.actions';
import { Categories, ProductDTO as ProductDTO } from '../../product.DTO';

export interface Card {
  title: string;
  subtitle: string;
  text: string;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild('input') input: any;

  categories = Categories;
  obs: Observable<any>;
  columns: number;
  valueFilterText: string = '';
  valueFilterCategory: string = '';
  products: ProductDTO[] = [
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
  dataSource: MatTableDataSource<ProductDTO> = new MatTableDataSource<ProductDTO>(this.products);
  
  productsListSelected$: Observable<ProductDTO[]>;
  productList: ProductDTO[] = [];

  constructor(private changeDetectorRef: ChangeDetectorRef, private store: Store<{ productsListSelected: ProductDTO[] }>) {
    this.productsListSelected$ = store.select('productsListSelected');
    this.productsListSelected$.subscribe(res => this.productList = structuredClone(res));
    this.synchronizeProducts();
  }

  synchronizeProducts () {
    this.productList.map((productList) => {
      const index = this.products.findIndex((product) => product.id === productList.id);
      if (index === -1) return;
      this.products[index] = structuredClone(productList);
    });
    this.dataSource = new MatTableDataSource<ProductDTO>(this.products);
  }

  ngOnInit() {
    this.columns = this.resizeCondition();
    this.changeDetectorRef.detectChanges();
    this.dataSource.paginator = this.paginator;
    this.obs = this.dataSource.connect();

    // Define filter
    this.dataSource.filterPredicate = function customFilter(data , filter: string ): boolean {
      const filterJSON = JSON.parse(filter);
      // 1. If both are empty
      if (filterJSON.name === '' && filterJSON.category === '') return true;
      // 2. Only category
      if (filterJSON.name === '' && filterJSON.category !== '') {
        return data.category === filterJSON.category;
      }
      // 3. Only name
      if (filterJSON.name !== '' && filterJSON.category === '') {
        return data.name.toLowerCase().includes(filterJSON.name);
      }
      // 4. If both have data
      if (filterJSON.name !== '' && filterJSON.category !== '') {
        if (data.category === filterJSON.category && data.name.toLowerCase().includes(filterJSON.name)) {
            return true;
        }
      }    
      return false;
    }
  }

  ngOnDestroy() {
    if (this.dataSource) {
      this.dataSource.disconnect();
    }
  }

  // Filter products by name
  applyFilter(event: Event): void {
    this.valueFilterText = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.dataSource.filter = JSON.stringify({name: this.valueFilterText, category: this.valueFilterCategory})

    if (this.dataSource.paginator) { 
      this.dataSource.paginator.firstPage();
    }
  }

  // Filter products by category
  changeCategoryFilter(event: {key: string, value: string}) {
    // Save category
    this.valueFilterCategory = event ? event.value : '' as string;    
    this.dataSource.filter = JSON.stringify({name: this.valueFilterText, category: this.valueFilterCategory})

    if (this.dataSource.paginator) { 
      this.dataSource.paginator.firstPage();
    }
  }

  cleanInputFilter(event: any): void {
    event.stopPropagation();
    this.dataSource.filter = '';
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
    this.valueFilterText = '';
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
    const indexProduct = this.productList.findIndex(product => product.id === productSelected.id);
    if (!(indexProduct > -1)) {
      this.productList.push(productSelected);
    } else {
      this.productList[indexProduct].units = productSelected.units;
    }
    this.store.dispatch(update({productsListSelected: structuredClone(this.productList)}));
  }

  restProductToTheList(productSelected: ProductDTO) {
    productSelected.units--;
    // If the units of the product is 0 remove from de list
    // If not modify the product
    const indexProduct = this.productList.findIndex(product => product.id === productSelected.id);
    if (productSelected.units === 0) {
      this.productList.splice(indexProduct, 1)
    } else {
      this.productList[indexProduct].units = productSelected.units;
    }
    this.store.dispatch(update({productsListSelected: structuredClone(this.productList)}));  
  }
}
