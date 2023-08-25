export interface ProductsDTO {
    isChecked: boolean,
    delete: string,
    name: String,
    category: Categories,
    brand: String, 
    price: number, 
    formatSize: String,
    marked: String,
    image: String,
    units?: number,
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