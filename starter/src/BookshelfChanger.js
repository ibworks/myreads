import { useState } from 'react';

const BookshelfChanger = ({ shelf, setShelf }) => {
    const [selection, setSelection] = useState(shelf || 'none');
    const handleChange = (e) => {
        const value = e.target.value;
        setSelection(value);
        setShelf(value);
    };

    return (
        <div className="book-shelf-changer">
            <select value={selection} onChange={handleChange}>
                <option value="_" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>);
}

export default BookshelfChanger;