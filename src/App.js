import "./App.css";
import BookList from "./BookList";
import BookSearch from "./BookSearch";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import * as BooksAPI from "./BooksAPI";

const maxSearchResults = 100;

function App() {
  const [books, setBooks] = useState([]);

  const refreshData = async () => {
    const res = await BooksAPI.getAll(); 
      setBooks(res);
  };

  useEffect(() => {
    refreshData();
  }, []);

  const setShelf = (book, shelf) => {
    const update = async () => {
      await BooksAPI.update(book, shelf);
      
      refreshData();
    };
    
    update();
  };

  return (

    <Routes>
      <Route exact path="/" element={<BookList books={books} setShelf={setShelf}/>} />
      <Route exact path="/search" element={
        <BookSearch shelvedBooks={books} maxResults={maxSearchResults} setShelf={setShelf} />} />
    </Routes>
   );
}

export default App;
