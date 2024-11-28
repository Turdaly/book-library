"use client";
import React, { useState, FormEvent } from "react";
import { useDispatch } from "react-redux";
import booksData from "@/app/data/books.json";
import "./BookForm.css";
import { addBook } from "@/app/redux/books/actionCreators";
import { CreateBookWithNewItems } from "@/app/utils";

const BookForm: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const dispatch = useDispatch();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (title && author) {
      const book: Types.IBook = CreateBookWithNewItems({ title, author });
      dispatch(addBook(book));
      setTitle("");
      setAuthor("");
    } else {
      alert("Both title and author are required!");
    }
  };

  const addRandomBook = () => {
    const randomIndex = Math.floor(Math.random() * booksData.length);
    const randomBookWithID = CreateBookWithNewItems(booksData[randomIndex]);
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
            required
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
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Add Book
        </button>
        <button type="button" onClick={() => addRandomBook()}>
          Add Random
        </button>
      </form>
    </div>
  );
};

export default BookForm;
