import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom"

// Components:
import Nav from './components/Navbar/Nav';
import Home from "./Screens/Home";
import Trending from './Screens/Trending';
import Shows from './Screens/Shows';
import MovieDetails from './Screens/MovieDetails';
import ShowDetails from './Screens/ShowDetails';
import Movies from './Movie/Movies';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Nav/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/movies" component={Movies}/>
          <Route exact path="/trending" component={Trending}/>
          <Route exact path="/series" component={Shows}/>
          <Route exact path="/movie/:movieId" component={MovieDetails}/>
          <Route exact path="/series/:showId" component={ShowDetails}/>
          <Route>404 not found</Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
