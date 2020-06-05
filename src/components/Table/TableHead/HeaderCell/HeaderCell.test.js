import React from "react";
import HeaderCell from "./HeaderCell";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("<HeaderCell/>", () => {
    afterEach(cleanup);

    test("HeaderCell renders correctly", () => {

        const {getByText} = render(
                <table>
                    <thead>
                        <tr>
                            <HeaderCell>Test Header Cell</HeaderCell>
                        </tr>
                    </thead>
                </table>);

        expect(getByText("Test Header Cell")).toBeInTheDocument();
    });
});