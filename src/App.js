import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import RecipeSearch from "./pages/RecipeSearch/RecipeSearch";
import RecipeInfo from "./pages/RecipeInfo/RecipeInfo";
import './App.css';

const App = () => (
  <HashRouter>
    <Route exact path="/" component={RecipeSearch}/>
    <Route exact path="/recipeInfo/:recipeId" component={RecipeInfo}/>
  </HashRouter>
);

export default App;
