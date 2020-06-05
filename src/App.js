import React from "react";
import {HashRouter, Route} from "react-router-dom";
import RecipeSearch from "./pages/RecipeSearch/RecipeSearch";
import RecipeInfo from "./pages/RecipeInfo/RecipeInfo";
import Layout from "./components/Layout/Layout";

const App = () => (
    <HashRouter>
      <Layout>
        <Route exact path="/" component={RecipeSearch}/>
        <Route exact path="/recipeInfo/:recipeId" component={RecipeInfo}/>
      </Layout>
    </HashRouter>
);

export default App;
