import React from "react";
import Dropdown from "./Dropdown";
import { render, fireEvent } from "@testing-library/react";

describe("<Dropdown/>", () => {
    test("Dropdown Renders Correctly", () => {
        const props = {
            title : "Test",
            value : "Testing",
            dropdownOptions : [0, 1, 2, 3, 4],
            onChange : jest.fn(),
        };

        const {getByTestId} = render(<Dropdown {...props}/>);

        expect(getByTestId("TestDropdown")).toBeInTheDocument();
    });

    test("Dropdown on change works as expected", () => {
        const props = {
            title : "Test",
            value : "Testing",
            dropdownOptions : [0, 1, 2, 3, 4],
            onChange : jest.fn(),
        };

        const {getByTestId} = render(<Dropdown {...props}/>);

        fireEvent.change(getByTestId("TestDropdown"), {target : {value : "Cheese"}});

        expect(props.onChange).toHaveBeenCalled();
    });
});