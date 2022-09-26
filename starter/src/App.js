import "./App.css";
import BookList from "./BookList";
import BookSearch from "./BookSearch";
import { Route, Routes } from "react-router-dom";

function App() {
  return (

    <Routes>
      <Route exact path="/" element={<BookList />} />
      <Route exact path="/search" element={<BookSearch />} />
    </Routes>
   );
}

export default App;
