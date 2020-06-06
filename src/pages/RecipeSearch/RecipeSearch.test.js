import React from "react";
import RecipeSearch from "./RecipeSearch";
import RecipeInfo from "../RecipeInfo/RecipeInfo";
import {MemoryRouter, Router, Route} from "react-router-dom";
import {render, fireEvent, cleanup, waitForElementToBeRemoved} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { createMemoryHistory } from "history";

const renderRoutes = () =>
  render(
    <MemoryRouter>
        <Route path="/recipeInfo/:recipeId" component={RecipeInfo}/>
        <Route exact path="/" component={RecipeSearch}/>
    </MemoryRouter>
  );

describe("<RecipeSearch/>" , () => {
    afterEach(cleanup);
    test("User is able to search for a recipe", async () => {
        const history = createMemoryHistory();

        const {getByTestId, getByText} = render(
            <Router history={history}>
                <RecipeSearch/>
            </Router>
        );

        fireEvent.change(getByTestId("searchTextInput"), { target: {value : "Cheese"}});

        fireEvent.click(getByTestId("SearchButton"));

        await waitForElementToBeRemoved(() => getByTestId("loadingSpinner"));

        expect(getByText("Three-Cheese Pizza (For Cheese Lovers)")).toBeInTheDocument();
    });

    test("No results show for invalid ingredient search", async () => {
        const history = createMemoryHistory();

        const {getByTestId} = render(
            <Router history={history}>
                <RecipeSearch/>
            </Router>
        );

        fireEvent.change(getByTestId("searchTextInput"), { target: {value : "1234567890"}});

        fireEvent.click(getByTestId("SearchButton"));

        await waitForElementToBeRemoved(() => getByTestId("loadingSpinner"));

        expect(getByTestId("errorMessage")).toBeInTheDocument();
    });

    test("User is taken to another page after clicking button on table row", async () => {

        const {getByTestId, container} = renderRoutes();

        fireEvent.change(getByTestId("searchTextInput"), { target: {value : "Cheese"}});

        fireEvent.click(getByTestId("SearchButton"));

        await waitForElementToBeRemoved(() => getByTestId("loadingSpinner"));

        fireEvent.click(getByTestId("Three-Cheese Pizza (For Cheese Lovers)LinkButton"));

        await waitForElementToBeRemoved(() => getByTestId("loadingSpinner"));

        expect(container).toContainElement(getByTestId("recipeInfoPageHeader"));
    });

    test("User can select how many results to return", async () => {
        const history = createMemoryHistory();

        const {getByTestId, findAllByText} = render(
            <Router history={history}>
                <RecipeSearch/>
            </Router>
        );

        fireEvent.change(getByTestId("Amount Of RecipesDropdown"), {target : {value : 5}});

        fireEvent.change(getByTestId("searchTextInput"), { target: {value : "Cheese"}});

        fireEvent.click(getByTestId("SearchButton"));

        await waitForElementToBeRemoved(() => getByTestId("loadingSpinner"));

        const recipeButtonsFound = await findAllByText("Recipe Info");

        expect(recipeButtonsFound).toHaveLength(5);

    });

});