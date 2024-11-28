export {}

declare global {
  export namespace Types {
    interface IBook {
      id?: string;
      title: string;
      author: string;
      isFavorite?: boolean
    }
  }
}

