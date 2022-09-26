import Book from "./Book";

const Bookshelf = ({ title, books, setShelf }) => {

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map(b => (<li key={b.id}><Book book={b} setShelf={(book,shelf)=>setShelf(book,shelf)} /></li>))}
        </ol>
      </div>
    </div>
             
  );
}

export default Bookshelf;
