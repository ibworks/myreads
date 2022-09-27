import BookCover from "./BookCover";
import BookshelfChanger from "./BookshelfChanger";

const Book = ({ book, setShelf }) => {
    if (!book) return null;

    const { title, authors, imageLinks, shelf } = book;

    return (
        <div className="book">
            <div className="book-top">
                <BookCover imageLinks={imageLinks} />
                <BookshelfChanger shelf={shelf} setShelf={(shelf) => setShelf(book, shelf)} />
            </div>
            <div className="book-title">{title}</div>
            <div className="book-authors">{authors}</div>
        </div>);
}

export default Book;