import { IBook } from './IBook'

// alle Eigenschaften readlony
export interface IReadOnlyBook extends Readonly<IBook> {}

