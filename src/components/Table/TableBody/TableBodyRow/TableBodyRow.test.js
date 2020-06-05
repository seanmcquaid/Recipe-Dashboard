import React from "react";
import TableBodyRow from "./TableBodyRow";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import {HashRouter as Router} from "react-router-dom";

describe("<TableBodyRow/>", () => {
    afterEach(cleanup);

    test("Table Body Row renders correctly", () => {
        const props = {
            rowInfo : {
                title : "Test",
                id : 0
            }
        }
        const {getByTestId} = render(
            <Router>
                <table>
                    <thead>
                        <TableBodyRow {...props}/>
                    </thead>
                </table>
            </Router>);

        expect(getByTestId("TestTableRow")).toBeInTheDocument();
    });
});