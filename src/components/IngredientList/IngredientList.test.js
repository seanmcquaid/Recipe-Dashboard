import React from "react";
import IngredientList from "./IngredientList";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("<IngredientList/>", () => {
    afterEach(cleanup);

    test("IngredientList renders correctly", () => {
        const props = {
            ingredients : [
                {
                    id : 1,
                    name : "Cheese",
                    metricMeasurement : "2 grams",
                    usMeasurement : "2 cups",
                }
            ],
            isMetric : false
        };

        const {getByTestId} = render(<IngredientList {...props}/>);

        expect(getByTestId("ingredientsList")).toBeInTheDocument();
    });
});