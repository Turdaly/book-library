export {};

declare global {
  export namespace Types {
    interface IBookDetails {
      title: string;
      author: string;
    }
    interface IBook  extends IBookDetails {
      id: string;
      sourse: string;
      isFavorite: boolean;
    }
    interface FilterState {
      title: string;
      author: string;
      onlyFavorite: boolean;
    }
  }
}
