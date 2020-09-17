import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ManagerArticle from "./components/ManagerArticle";
import SearchResult from "./components/SearchResult";
import Footer from "./components/Footer";
import About from "./components/About";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <main className="main App">
          <Navbar />
          <Route exact path="/" component={ManagerArticle} />
          <Route exact path="/" component={SearchResult} />
          <Route exact path="/about" component={About} />
          <Footer />
        </main>
      </Router>
    );
  }
}

export default App;
