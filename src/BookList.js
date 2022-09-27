import Bookshelf from "./Bookshelf";
import { Link } from "react-router-dom";

const BookList = ({books, setShelf}) => {
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
      <div className="open-search" title="Add a book">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
}

export default BookList;
