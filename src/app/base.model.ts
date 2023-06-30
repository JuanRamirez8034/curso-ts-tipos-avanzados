export interface BaseModel {
  readonly id: string;
  readonly createdAt: Date;
  updatedAt: Date;
}
// readonly convierte en constante una propiedad (solo lectura)