import React from "react";
import RecipeInfo from "./RecipeInfo";
import {MemoryRouter, Route} from "react-router-dom";
import {render, fireEvent, waitForElementToBeRemoved} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

const renderComponent = ({ recipeId }) =>
  render(
    <MemoryRouter initialEntries={[`/recipeInfo/${recipeId}`]}>
        <Route path="/recipeInfo/:recipeId">
            <RecipeInfo/>
        </Route>
    </MemoryRouter>
  );

describe("<RecipeInfo/>" , () => {
    test("User is able toggle between US and metric measurements", async () => {
        const {getByTestId, getByText} = renderComponent({recipeId : 215435});

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