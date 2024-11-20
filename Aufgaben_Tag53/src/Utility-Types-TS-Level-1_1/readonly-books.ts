import { IBook } from "./IBook"

// Erstelle dort einen neuen Type ReadOnlyBook basierend auf IBook
// Alle Eigenschaften von IBook sind readonly ⇒ schreibgeschützt

export type TReadOnlyBook = Readonly<IBook>;