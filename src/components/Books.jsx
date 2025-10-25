import { useState, useEffect } from "react";
import Book from "./Book";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("/booksData.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <>
      <h2 className="text-4xl font-bold text-center">Books</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-6  ">
        {books.map((book) => (
          <Book key={book.bookId} book={book}></Book>
        ))}
      </div>
    </>
  );
};

export default Books;

/**
 * 1. state to store books data
 * 2. useEffect to load data
 * 3. fetch to load data
 * set the data to the state
 */
