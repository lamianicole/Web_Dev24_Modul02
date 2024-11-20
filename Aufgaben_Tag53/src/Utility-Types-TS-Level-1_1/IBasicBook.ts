import { IBook } from "./IBook";

// Lege dann ein neues Interface IBasicBook basierend auf IBook an, bei dem ebenfalls publishingYear und shortDescription fehlen
export interface IBasicBook extends Omit<IBook, 'publishingYear' | 'shortDescription'> {}

