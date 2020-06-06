import React from "react";
import P from "./P";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"

describe("<P/>", () => {
    afterEach(cleanup);
    test("Text Input Renders Correctly", () => {
        const {getByText} = render(<P>Paragraph Text Here</P>)

        expect(getByText("Paragraph Text Here")).toBeInTheDocument();
    });
});