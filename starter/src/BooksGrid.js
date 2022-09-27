import Book from "./Book";

const BooksGrid = ({ books, setShelf }) => {
  if (!books) return null;
  
  return (
    <ol className="books-grid">
      {books.map(b => (
        <li key={b.id}>
          <Book
            book={b}
            setShelf={(book, shelf) => setShelf(book, shelf)} />
        </li>))}
    </ol>);
}

export default BooksGrid;
