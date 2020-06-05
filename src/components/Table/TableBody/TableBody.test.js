import React from "react";
import TableBody from "./TableBody";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import {HashRouter as Router} from "react-router-dom";

describe("<TableBody/>", () => {
    afterEach(cleanup);

    test("TableBody renders correctly", () => {
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
                <table>
                    <TableBody {...props}/>
                </table>
            </Router>);

        expect(getByTestId("recipeTableBody")).toBeInTheDocument();
    });
});