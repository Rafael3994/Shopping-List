export interface ProductDTO {
    id?: number,
    isChecked: boolean,
    delete: string,
    name: String,
    category: Categories,
    brand: String, 
    price: number, 
    formatSize: String,
    marked: String,
    image: String,
    units: number,
};


export enum Categories {
    HygieneandCleanliness = 'Hygiene and Cleanliness',
    Costemica = 'Costemica',
    Dairy = 'Dairy',
    Alcohol = 'Alcohol',
    Fruits = 'Fruits',
    Vegetables = 'Vegetables',
    MeatFishAndEggs = 'Meat, Fish and Eggs',
    CerealsSugarAndSweets = 'Cereals, Sugar and Sweets',
    FatsOilAndButter = 'Fats, oil and butter',
    NaturalProducts = 'Natural products',
}

// Categorias
// - Higiene y Limpieza
// - Costemica
// (Alimentos)
//      - Láctios
//      - Alcohol
//      - Frutas
//      - Verduras y Hortalizas
//      - Carnes, pescados y huevos
//      - Patatas, legumbres, frutos secos
//      - Cereales y derivados, azúcar y dulces
//      - Grasas, aceite y mantequilla
//      - Productos naturales (agua)

export const productsDummy: ProductDTO[] = [
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