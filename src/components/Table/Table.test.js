import React from "react";
import Table from "./Table";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import {HashRouter as Router} from "react-router-dom";

describe("<Table/>", () => {
    afterEach(cleanup);

    test("Table renders correctly", () => {
        const props = {
            data : [
                {
                    title : "test", 
                    id : 0
                }
            ]
        };

        const {getByTestId} = render(
            <Router>
                <Table {...props}/>
            </Router>);

        expect(getByTestId("recipeTable")).toBeInTheDocument();
    });
});