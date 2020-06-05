import React from "react";
import TableHead from "./TableHead";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import {HashRouter as Router} from "react-router-dom";

describe("<TableHead/>", () => {
    afterEach(cleanup);

    test("Table Head renders correctly", () => {
        const props = {
            headerCellNames : ["Test", "Header", "Cell", "Names"]
        }
        const {getByTestId} = render(
            <Router>
                <table>
                    <TableHead {...props}/>
                </table>
            </Router>);

        expect(getByTestId("recipeTableHead")).toBeInTheDocument();
    });
});