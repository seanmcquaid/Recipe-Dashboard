import React from "react";
import Button from "./Button";
import {render, fireEvent} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("<Button/>", () => {
    test("Button on click works correctly", () => {
        const props = {
            title : "Test Button",
            type : "button",
            onClick : jest.fn(),
        };

        const {getByText} = render(<Button {...props}/>)

        fireEvent.click(getByText("Test Button"));

        expect(props.onClick).toHaveBeenCalledTimes(1);
    });

    test("Button renders correctly", () => {
        const props = {
            title : "Test Button",
            type : "button",
            onClick : jest.fn(),
        };

        const {getByText} = render(<Button {...props}/>)

        expect(getByText("Test Button")).toBeInTheDocument();
    });
});