import React from "react";
import RecipeSearch from "./RecipeSearch";
import {HashRouter as Router} from "react-router-dom";
import {render, fireEvent, cleanup, waitForElementToBeRemoved} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("<RecipeSearch/>" , () => {
    afterEach(cleanup);
    test("User is able to search for a recipe", async () => {
        const {getByTestId, getByText} = render(
            <Router>
                <RecipeSearch/>
            </Router>
        );

        fireEvent.change(getByTestId("searchTextInput"), { target: {value : "Cheese"}});

        fireEvent.click(getByTestId("SearchButton"));

        await waitForElementToBeRemoved(() => getByTestId("loadingSpinner"));

        expect(getByText("Three-Cheese Pizza (For Cheese Lovers)")).toBeInTheDocument();
    });

    test("No results show for invalid ingredient search", async () => {
        const {getByTestId} = render(
            <Router>
                <RecipeSearch/>
            </Router>
        );

        fireEvent.change(getByTestId("searchTextInput"), { target: {value : "1234567890"}});

        fireEvent.click(getByTestId("SearchButton"));

        await waitForElementToBeRemoved(() => getByTestId("loadingSpinner"));

        expect(getByTestId("errorMessage")).toBeInTheDocument();
    });

    test("User is taken to another page after clicking button on table row", async () => {
        const {getByTestId} = render(
            <Router>
                <RecipeSearch/>
            </Router>
        );

        fireEvent.change(getByTestId("searchTextInput"), { target: {value : "Cheese"}});

        fireEvent.click(getByTestId("SearchButton"));

        await waitForElementToBeRemoved(() => getByTestId("loadingSpinner"));

        fireEvent.click(getByTestId("Three-Cheese Pizza (For Cheese Lovers)LinkButton"));

        expect(getByTestId("recipeSearchPageHeader")).not.toBeInTheDocument();
    });

    test("User can select how many results to return", () => {

    });

});