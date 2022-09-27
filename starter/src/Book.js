import BookCover from "./BookCover";
import BookshelfChanger from "./BookshelfChanger";

const Book = ({ book, setShelf }) => {
    if (!book) return null;

    const { title, authors, imageLinks, shelf } = book;
    let details = title;
    if (book.subtitle) details += `\n${book.subtitle}`;
    if(book.contentVersion) details += `\nv.${book.contentVersion}`
    if (book.publisher && book.publishedDate) details += `\n\n${book.publisher} ${book.publishedDate}`;
    if (book.description) details += `\n\n${book.description}`;
    
    return (
        <div className="book" title={details}>
            <div className="book-top">
                <BookCover imageLinks={imageLinks} />
                <BookshelfChanger shelf={shelf} setShelf={(shelf) => setShelf(book, shelf)} />
            </div>
            <div className="book-title">{title}</div>
            <div className="book-authors">{authors && authors.join(', ')}</div>
        </div>);
}

export default Book;