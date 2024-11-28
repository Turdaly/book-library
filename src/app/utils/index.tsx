import { v4 as uuidv4 } from 'uuid';
export const CreateBookWithNewItems = (book: Types.IBook):Types.IBook => {
  return { ...book, isFavorite: false, id: uuidv4()};
};
