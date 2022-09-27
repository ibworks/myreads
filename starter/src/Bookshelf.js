import BooksGrid from "./BooksGrid";

const Bookshelf = ({ title, books, setShelf }) => {

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
          <BooksGrid books={books} setShelf={setShelf}/>
      </div>
    </div>
             
  );
}

export default Bookshelf;
