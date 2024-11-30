import { v4 as uuidv4 } from "uuid";
export const CreateBookWithNewItems = (
  book: Types.IBookDetails,
  sourse: string
): Types.IBook => {
  return { ...book, sourse, isFavorite: false, id: uuidv4() };
};
