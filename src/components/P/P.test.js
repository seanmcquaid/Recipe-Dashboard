import React from "react";
import P from "./P";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"

describe("<P/>", () => {
    test("Text Input Renders Correctly", () => {
        const {getByText} = render(<P>Paragraph Text Here</P>)

        expect(getByText("Paragraph Text Here")).toBeInTheDocument();
    });
});