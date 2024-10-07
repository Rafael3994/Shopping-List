export interface ProductDTO {
    id?: number,
    isChecked: boolean,
    delete: string,
    name: string,
    category: Categories,
    brand: string,
    price: number,
    formatSize: string,
    marked: string,
    image: string,
    units: number,
};

export enum Categories {
    HYGIENE_AND_CLEANLINESS = 'HYGIENE_AND_CLEANLINESS',
    COSMETIC = 'COSMETIC',
    DAIRY = 'DAIRY',
    ALCOHOL = 'ALCOHOL',
    FRUITS = 'FRUITS',
    VEGETABLES = 'VEGETABLES',
    MEAT_FISH_AND_EGGS = 'MEAT_FISH_AND_EGGS',
    CEREALS_SUGAR_AND_SWEETS = 'CEREALS_SUGAR_AND_SWEETS',
    FATS_OIL_AND_BUTTER = 'FATS_OIL_AND_BUTTER',
    NATURAL_PRODUCTS = 'NATURAL_PRODUCTS',
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
        name: 'PRODUCTS.MILK',
        category: Categories.DAIRY,
        brand: 'Hacendado',
        price: 1.20,
        units: 0,
        formatSize: '1u.',
        marked: 'Mercadona',
        image: 'assets/photos/milk.webp',
    },
    {
        id: 2,
        isChecked: false,
        delete: 'delete',
        name: 'PRODUCTS.WHOLE_BREAD',
        category: Categories.CEREALS_SUGAR_AND_SWEETS,
        brand: 'Hacendado',
        price: 6.99,
        units: 0,
        formatSize: '1u.',
        marked: '',
        image: 'assets/photos/bread.webp',
    },
    {
        id: 3,
        isChecked: false,
        delete: 'delete',
        name: 'PRODUCTS.BASMATI_RICE',
        category: Categories.CEREALS_SUGAR_AND_SWEETS,
        brand: 'Hacendado',
        price: 2.00,
        units: 0,
        formatSize: '1u.',
        marked: 'Mercadona',
        image: 'assets/photos/rice.webp',
    },
    {
        id: 4,
        isChecked: false,
        delete: 'delete',
        name: 'PRODUCTS.TUNA',
        category: Categories.MEAT_FISH_AND_EGGS,
        brand: 'Nixe',
        price: 0.90,
        units: 0,
        formatSize: '1u.',
        marked: '',
        image: 'assets/photos/tuna.webp',
    },
    {
        id: 5,
        isChecked: false,
        delete: 'delete',
        name: 'PRODUCTS.NATURAL_YOGURT',
        category: Categories.DAIRY,
        brand: 'Hacendado',
        price: 0.80,
        units: 0,
        formatSize: 'Pack 6u.',
        marked: '',
        image: 'assets/photos/yoghurt.webp',
    },
    {
        id: 6,
        isChecked: false,
        delete: 'delete',
        name: 'PRODUCTS.SPAGHETTI',
        category: Categories.CEREALS_SUGAR_AND_SWEETS,
        brand: 'Hacendado',
        price: 1.00,
        units: 0,
        formatSize: '1u.',
        marked: '',
        image: 'assets/photos/spaghetti.webp',
    },
    {
        id: 7,
        isChecked: false,
        delete: 'delete',
        name: 'PRODUCTS.POTATO_CHIPS',
        category: Categories.VEGETABLES,
        brand: 'Torres',
        price: 1.80,
        units: 0,
        formatSize: '1u.',
        marked: 'Mercadona',
        image: 'assets/photos/potato.webp',
    },
    {
        id: 8,
        isChecked: false,
        delete: 'delete',
        name: 'PRODUCTS.MINERAL_WATER',
        category: Categories.NATURAL_PRODUCTS,
        brand: 'Hacendado',
        price: 3.15,
        units: 0,
        formatSize: '1.5L',
        marked: 'Mercadona',
        image: 'assets/photos/water.webp',
    },
]