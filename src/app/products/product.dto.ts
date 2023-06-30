import { Product } from './product.model';

// Omit sirve para omitir propiedades de una interfaz extenddida
export interface CreateProductDto extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'>{
  categoryId: string;
}

// Pick solo toma las propiedades especificadas desde una interface extendida
type example = Pick<Product, 'color' | 'description'>;

// Partial convierte todas las propiedades de la interfaz extendidad en propiedades opcionales
export interface UpdateProductDto extends Partial<CreateProductDto> {}

// Required convierte todas las propiedades de la interfaz extendida en propiedades requeridas
type example2 = Required<Product>;

// Readonly convierte las propiedades en solo lectura
export interface FindProductDto extends Readonly<Partial<Omit<Product, 'tags'>>> {
  readonly tags: ReadonlyArray<string>;
}

type example3 = Readonly<Product>;
