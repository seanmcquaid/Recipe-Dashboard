import React from "react";
import RecipeInfo, {getIngredientNameAndMeasurementInfo} from "./RecipeInfo";
import {MemoryRouter, Route} from "react-router-dom";
import {render, fireEvent, waitForElementToBeRemoved} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

const renderComponent = ({ recipeId }) =>
  render(
    <MemoryRouter initialEntries={[`/recipeInfo/${recipeId}`]}>
        <Route exact path="/recipeInfo/:recipeId">
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

describe("getIngredientNameAndMeasurementInfo", () => {
    test("getIngredientNameAndMeasurementInfo works correctly", () => {
        const object = {
          extendedIngredients : [
            {
              id : 1,
              name : "Ingredient Name",
              measures : {
                metric : {
                  amount : 200,
                  unitLong : "Grams"
                },
                us : {
                  amount : 200,
                  unitLong : "Cups"
                },
              },
            }
          ]
        };
        const result = getIngredientNameAndMeasurementInfo(object);

        const expectedResult = [
          {
            id : 1,
            name : "Ingredient Name",
            metricMeasurement : "200 Grams",
            usMeasurement : "200 Cups",
          }
        ]

        expect(result).toEqual(expectedResult);
    });

    test("getIngredientNameAndMeasurementInfo will return an empty array if provided an invalid object", () => {
        const object = {};
        const result = getIngredientNameAndMeasurementInfo(object);

        expect(result.length).toBe(0);
    });
})