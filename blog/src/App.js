import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ManagerArticle from "./components/ManagerArticle";
import SearchResult from "./components/SearchResult";

function App() {
  return (
    <main className="main App">
      <Navbar />
      <ManagerArticle />
      <hr />
      <SearchResult />
    </main>
  );
}

export default App;
