import React from "react";
import RecipeSearch from "./RecipeSearch";
import {HashRouter as Router} from "react-router-dom";
import {render, fireEvent, wait} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("<RecipeSearch/>" , () => {
    test("User is able to search for a recipe", () => {
        const {getByTestId, getByText} = render(
            <Router>
                <RecipeSearch/>
            </Router>
        );

        fireEvent.change(getByTestId("searchTextInput"), { target: {value : "Cheese"}});

        fireEvent.click(getByTestId("searchButton"));

        expect(getByTestId("cheeseburgerId")).toBeInTheDocument();
    });

    test("No results show for invalid ingredient search", () => {
        const {getByTestId, getByText} = render(
            <Router>
                <RecipeSearch/>
            </Router>
        );

        fireEvent.change(getByTestId("searchTextInput"), { target: {value : "Non existent ingredient"}});

        fireEvent.click(getByTestId("searchButton"));

        expect(getByTestId("noResultsText")).toBeInTheDocument();
    });

    test("Results show for valid ingredient search", () => {
        const {getByTestId, getByText} = render(
            <Router>
                <RecipeSearch/>
            </Router>
        );

        fireEvent.change(getByTestId("searchTextInput"), { target: {value : "Cheese"}});

        fireEvent.click(getByTestId("searchButton"));

        expect(getByTestId("cheeseburgerId")).toBeInTheDocument();
    });

    test("User is taken to another page after clicking button on table row", async () => {
        const {getByTestId, getByText} = render(
            <Router>
                <RecipeSearch/>
            </Router>
        );

        fireEvent.change(getByTestId("searchTextInput"), { target: {value : "Cheese"}});

        fireEvent.click(getByTestId("searchButton"));

        await wait(async () => expect(getByTestId("loadingSpinner")).not.toBeInTheDocument());

        fireEvent.click(getByTestId("linkButton"));

        expect(getByTestId("recipeSearchHeader")).not.toBeInTheDocument();
    });

    test("User can select how many results to return", () => {

    });

    test("User can select how many results to display per page", () => {

    });
});