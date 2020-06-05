import React from "react";
import RecipeInfo from "./RecipeInfo";
import {HashRouter as Router} from "react-router-dom";
import {render, fireEvent} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("<RecipeInfo/>" , () => {
    test("User is able toggle between US and metric measurements", () => {
        const {getByTestId, getByText} = render(
            <Router>
                <RecipeInfo/>
            </Router>
        );

        expect(getByText("Measurement System : US")).toBeInTheDocument();

        fireEvent.click(getByTestId("toggleMeasurementSystemButton"));

        expect(getByText("Measurement System : Metric")).toBeInTheDocument();

        fireEvent.click(getByTestId("toggleMeasurementSystemButton"));

        expect(getByText("Measurement System : US")).toBeInTheDocument();
    });

});