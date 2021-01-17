import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from "./Components/Header";
import { Movie } from "./Components/Movie"
import { Nomination } from "./Components/Nomination"
import { Homepage } from "./Components/Homepage"
import { Search } from "./Components/Search"
import "./App.css"
import "./lib/font-awesome/css/all.min.css"

function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        
        <Route exact path="/nomination">
          <Nomination />
        </Route>
        
        <Route exact path="/search">
          <Search />
        </Route>
      </Switch>
    </Router>
  )
}

export default App