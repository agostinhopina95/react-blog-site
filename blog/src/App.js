import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ManagerArticle from "./components/ManagerArticle";
import SearchResult from "./components/SearchResult";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="main App">
      <Navbar />
      <ManagerArticle />
      <SearchResult />
      <Footer />
    </main>
  );
}

export default App;
