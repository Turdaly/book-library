"use client";
import { BsBookmarkStar, BsBookmarkStarFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import "./BookList.css";
import {
  selectAuthorFilter,
  selectOnlyFavoriteFilter,
  selectTitleFilter,
} from "@/app/redux/slices/filterSlices";
import { deleteBook, selectBook, toggleFavorite } from "@/app/redux/slices/bookSlieces";

const BookList = () => {
  const dispatch = useDispatch();
  const books: Types.IBook[] = useSelector(selectBook);
  const titleFilter = useSelector(selectTitleFilter);
  const authorFilter = useSelector(selectAuthorFilter);
  const onlyFavorite = useSelector(selectOnlyFavoriteFilter);

  const filteredBooks = books.filter((book: Types.IBook) => {
    const matchesTitle = book.title
      .toLowerCase()
      .includes(titleFilter.toLowerCase());
    const matchesAuthor = book.author
      .toLowerCase()
      .includes(authorFilter.toLowerCase());
    const matchesFavorite = onlyFavorite ? book.isFavorite : true;
    return matchesAuthor && matchesTitle && matchesFavorite;
  });

  const highlightMatch = (text: string, filter: string) => {
    if (!filter) return text;

    const regex = new RegExp(`(${filter})`, "gi");
    return text.split(regex).map((substring, i) => {
      if (substring.toLowerCase() === filter.toLowerCase()) {
        return (
          <span key={i} className="highlight">
            {substring}
          </span>
        );
      }
      return substring;
    });
  };
  return (
    <div className="app-block book-list">
      <h2>BookList</h2>
      {books.length == 0 ? (
        <p>books are not available</p>
      ) : (
        <ul>
          {filteredBooks.map((book: Types.IBook, i: number) => (
            <li key={book.id}>
              <div className="book-info">
                {++i}. {highlightMatch(book.title, titleFilter)} by{" "}
                <strong>{highlightMatch(book.author, authorFilter)}</strong> ({book.sourse})
              </div>
              <div className="book-actions">
                <span onClick={() => dispatch(toggleFavorite(book.id))}>
                  {book.isFavorite ? (
                    <BsBookmarkStarFill className="star-icon" />
                  ) : (
                    <BsBookmarkStar className="star-icon" />
                  )}
                </span>
                <button onClick={() => dispatch(deleteBook(book.id))}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookList;
