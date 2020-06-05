import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import RecipeSearch from "./pages/RecipeSearch/RecipeSearch";
import RecipeInfo from "./pages/RecipeInfo/RecipeInfo";
import Layout from './components/Layout/Layout';

const App = () => (
  <Layout>
    <HashRouter>
      <Route exact path="/" component={RecipeSearch}/>
      <Route exact path="/recipeInfo/:recipeId" component={RecipeInfo}/>
    </HashRouter>
  </Layout>
);

export default App;
