import React from "react";
import {render, cleanup} from "@testing-library/react";
import H1 from "./H1";

describe("<H1/>", () => {
    afterEach(cleanup);
    test("H1 renders correctly", () => {
        const {getByText} = render(<H1>Header Text</H1>);
        expect(getByText("Header Text")).toBeInTheDocument();
    });
});