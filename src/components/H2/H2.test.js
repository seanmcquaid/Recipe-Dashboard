import React from "react";
import {render, cleanup} from "@testing-library/react";
import H2 from "./H2";

describe("<H2/>", () => {
    afterEach(cleanup);
    test("H2 renders correctly", () => {
        const {getByText} = render(<H2>Sub Header Text</H2>);
        expect(getByText("Sub Header Text")).toBeInTheDocument();
    });
});