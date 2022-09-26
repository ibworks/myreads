/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import * as BooksAPI from "./BooksAPI";
import Bookshelf from "./Bookshelf";
// import { Link } from "react-router-dom";

const BookList = () => {
  const [books, setBooks] = useState([]);

  const refreshData = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
  };
  
  useEffect(() => {
    refreshData();
  }, []);

  const setShelf = (book, shelf) => {
    console.log('setShelf', { book, shelf });
    const update = async () => {
      const res = await BooksAPI.update(book, shelf);
      console.log({ res });
    }
    
    update();
    refreshData();
  };

  const GetBooks = (shelf) => books.filter(b => b.shelf === shelf);
  
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
          <div>
            <Bookshelf title="Currently Reading" books={GetBooks("currentlyReading")} setShelf={(b,s) => setShelf(b,s)} />
            <Bookshelf title="Want to Read" books={GetBooks("wantToRead")} setShelf={(b,s) => setShelf(b,s)} />
            <Bookshelf title="Read" books={GetBooks("read")} setShelf={(b,s) => setShelf(b,s)} />
        </div>
      </div>
      <div className="open-search">
        {/* <Link to="/search">Add a book</Link> */}
      </div>
    </div>
  );
}

export default BookList;
