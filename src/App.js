import React from "react";
import {HashRouter, Route, Switch} from "react-router-dom";
import RecipeSearch from "./pages/RecipeSearch/RecipeSearch";
import RecipeInfo from "./pages/RecipeInfo/RecipeInfo";
import Layout from "./components/Layout/Layout";

const App = () => (
    <HashRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={RecipeSearch}/>
          <Route exact path="/recipeInfo/:recipeId" component={RecipeInfo}/>
        </Switch>
      </Layout>
    </HashRouter>
);

export default App;
