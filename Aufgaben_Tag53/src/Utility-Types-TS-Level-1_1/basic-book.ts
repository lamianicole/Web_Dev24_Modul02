import { IBook } from './IBook'

// Erstelle dort einen neuen Type BasicBook basierend auf IBook
// BasicBook soll folgende Eigenschaften nicht haben: publishingYear: string, shortDescription: string

export type TBasicIBook = Omit<IBook, 'publishingYear' | 'shortDescription'>;
