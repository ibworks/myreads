import { useEffect, useState } from "react";

const BookCover = ({ imageLinks }) => {
    const [imageUrl, setImageUrl] = useState('url("http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api")');

    useEffect(() => {
        const url = (imageLinks && (imageLinks.smallThumbnail || imageLinks.thumbnail));
        const bgImage = url && `url("${url}")`;
        // setImageUrl(bgImage);
        // console.log({ imageLinks, url, bgImage });
    }, [imageLinks]);

    return (
        <div
            className="book-cover"
            title={imageUrl}
            style={
                {
                    backgroundImage: {imageUrl}
                    // backgroundImage: 'url("http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api")',
                }}
        />);
}

export default BookCover;