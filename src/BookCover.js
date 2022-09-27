import { useEffect, useState } from "react";

const BookCover = ({ imageLinks }) => {
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        const url = (imageLinks && (imageLinks.smallThumbnail || imageLinks.thumbnail));
        setImageUrl(url);
    }, [imageLinks]);

    const coverStyle = (imageUrl && { backgroundImage: `url('${imageUrl}')` }) || {};

    return <div className="book-cover" style={coverStyle} />;
}

export default BookCover;