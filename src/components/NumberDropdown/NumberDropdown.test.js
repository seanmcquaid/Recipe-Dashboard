import React from "react";
import NumberDropdown from "./NumberDropdown";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("<NumberDropdown/>", () => {
    afterEach(cleanup);
    test("NumberDropdown Renders Correctly", () => {
        const props = {
            title : "Test",
            value : 1,
            dropdownOptions : [0, 1, 2, 3, 4],
            onChange : jest.fn(),
        };

        const {getByTestId} = render(<NumberDropdown {...props}/>);

        expect(getByTestId("TestDropdown")).toBeInTheDocument();
    });

    test("NumberDropdown on change works as expected", () => {
        const props = {
            title : "Test",
            value : 1,
            dropdownOptions : [0, 1, 2, 3, 4],
            onChange : jest.fn(),
        };

        const {getByTestId} = render(<NumberDropdown {...props}/>);

        fireEvent.change(getByTestId("TestDropdown"), {target : {value : 1}});

        expect(props.onChange).toHaveBeenCalled();
    });
});