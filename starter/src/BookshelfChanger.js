const BookshelfChanger = ({ shelf, setShelf }) => {
    const handleChange = (e) => setShelf(e.target.value);

    return (
        <div className="book-shelf-changer">
            <select value={shelf || 'none'} onChange={handleChange}>
                <option value="_" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>);
}

export default BookshelfChanger;