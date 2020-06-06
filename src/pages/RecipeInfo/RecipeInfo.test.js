import React from "react";
import RecipeInfo from "./RecipeInfo";
import {Router} from "react-router-dom";
import {render, fireEvent, waitForElementToBeRemoved} from "@testing-library/react";
import { createMemoryHistory } from "history"
import "@testing-library/jest-dom/extend-expect";

describe("<RecipeInfo/>" , () => {
    test("User is able toggle between US and metric measurements", async () => {
        const history = createMemoryHistory();

        history.push("/recipeInfo/215435");

        const {getByTestId, getByText} = render(
            <Router history={history}>
                <RecipeInfo/>
            </Router>,
            {
                route : "/recipeInfo/215435"
            }
        );

        await waitForElementToBeRemoved(() => getByTestId("loadingSpinner"));

        expect(getByText("Ingredients - US Measurements")).toBeInTheDocument();

        expect(getByText("part-skim mozzarella cheese - 0.75 cups")).toBeInTheDocument();

        fireEvent.click(getByTestId("Is Metric?ToggleSwitch"));

        expect(getByText("Ingredients - Metric Measurements")).toBeInTheDocument();

        expect(getByText("part-skim mozzarella cheese - 177.441 milliliters")).toBeInTheDocument();

        fireEvent.click(getByTestId("Is Metric?ToggleSwitch"));

        expect(getByText("Ingredients - US Measurements")).toBeInTheDocument();

        expect(getByText("part-skim mozzarella cheese - 0.75 cups")).toBeInTheDocument();
    });

});