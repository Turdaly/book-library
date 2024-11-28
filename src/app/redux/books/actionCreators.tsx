import * as a from "./actionType"

export const addBook = (newBook: Types.IBook) => {
  return {
    type: a.ADD_BOOK,
    payload: newBook
  }
}

export const deleteBook = (id: string) => {
  return {
    type: a.DELETE_BOOK,
    payload: id
  }
}

export const toggleFavorite = (id: string) => {
  return {
    type: a.TOGGLE_FAVORITE,
    payload: id
  }
}