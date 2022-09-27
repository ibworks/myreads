import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import BooksGrid from "./BooksGrid";
import * as BooksAPI from "./BooksAPI";

const BookSearch = ({setShelf, maxResults, shelvedBooks}) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const bookDictionary = shelvedBooks && Object.assign({}, ...shelvedBooks.map((x) => ({ [x.id]: x.shelf }))) || [{}];
  const search = async () => { 
    if (query.length < 1) return;

    const res = await BooksAPI.search(query, maxResults); 
    
    if (res.error) {
      console.debug(`booksApi.search("${query}", ${maxResults}) failed: ${res.error}`);
      setResults([]);
    } else {
      setResults(res.map(r => ({ ...r, shelf: bookDictionary[r.id] || 'none'})));
    }
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    if (query.length > 0) {
      search();
    }
    else {
      setResults([]);
    }
  }, [query]);
  
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search" title="Go back" />
        <div className="search-books-input-wrapper">
          <input
            type="text"
            value={query}
            placeholder="Search by title, author, or ISBN"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="search-books-results">
        <BooksGrid books={results} setShelf={setShelf}/>
      </div>
    </div>);
}

export default BookSearch;
