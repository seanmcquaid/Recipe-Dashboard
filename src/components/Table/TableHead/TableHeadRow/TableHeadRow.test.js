import React from "react";
import TableHeadRow from "./TableHeadRow";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("<TableHeadRow/>", () => {
    afterEach(cleanup);

    test("TableHeadRow renders correctly", () => {

        const {getByTestId} = render(
                <table>
                    <thead>
                        <TableHeadRow data-testid="testTableHeadRow"></TableHeadRow>
                    </thead>
                </table>);

        expect(getByTestId("testTableHeadRow")).toBeInTheDocument();
    });
});