"use client";
import { useState, FormEvent, FC } from "react";
import { useDispatch } from "react-redux";
import { FaSpinner } from "react-icons/fa";
import booksData from "@/app/data/books.json";
import { CreateBookWithNewItems } from "@/app/utils";
import { addBook, fetchBook } from "@/app/redux/slices/bookSlieces";
import { AppDispatch } from "@/app/redux/store";
import { setError } from "@/app/redux/slices/errorSlices";
import "./BookForm.css";

const BookForm: FC = () => {
  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (title && author) {
      dispatch(addBook(CreateBookWithNewItems({ title, author }, "manual")));
      setTitle("");
      setAuthor("");
    } else {
      dispatch(setError("You must fill title and author"));
    }
  };

  const hundleAddRondomBookViaAPI = async () => {
    try {
      setIsLoading(true);
      await dispatch(fetchBook("random-book-delayed"));
    } finally {
      setIsLoading(false);
    }
  };

  const addRandomBook = () => {
    const randomIndex = Math.floor(Math.random() * booksData.length);
    const randomBookWithID = CreateBookWithNewItems(
      booksData[randomIndex],
      "random"
    );
    dispatch(addBook(randomBookWithID));
  };

  return (
    <div className="app-block book-form">
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter book title"
          />
        </div>
        <div className="form-group">
          <label htmlFor="author">Author</label>
          <input
            id="author"
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Enter author's name"
          />
        </div>
        <button type="submit" className="submit-button">
          Add Book
        </button>
        <button type="button" onClick={() => addRandomBook()}>
          Add Random
        </button>
        <button
          type="button"
          onClick={() => hundleAddRondomBookViaAPI()}
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <span>Loading book ...</span>
              <FaSpinner className="spinner" />
            </>
          ) : (
            "Add Random via API"
          )}
        </button>
      </form>
    </div>
  );
};

export default BookForm;
