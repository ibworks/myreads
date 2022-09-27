import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import BooksGrid from "./BooksGrid";
import * as BooksAPI from "./BooksAPI";

const BookSearch = ({setShelf, maxResults}) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const search = async () => { 
    if (query.length < 1) return;
    console.debug(`Search: ${query}`);
    const res = await BooksAPI.search(query, maxResults); 
    
    if (res.error) {
      console.error(res.error);
      setResults([]);
    } else {
      setResults(res);
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
