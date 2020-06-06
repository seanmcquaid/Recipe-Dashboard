import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import ToggleSwitch from "./ToggleSwitch";
import "@testing-library/jest-dom/extend-expect";

describe("<TextInput/>", () => {
    afterEach(cleanup);
    test("Text Input Renders Correctly", () => {
        const props = {
            title : "Test",
            value : false,
            onChange : jest.fn(),
        };

        const {getByTestId} = render(<ToggleSwitch {...props} />);

        expect(getByTestId("TestToggleSwitch")).toBeInTheDocument();
    });

    test("Text Input on change works as expected", () => {
        const props = {
            title : "Test",
            value : false,
            onChange : jest.fn(),
        };

        const {getByTestId} = render(<ToggleSwitch {...props} />);

        fireEvent.click(getByTestId("TestToggleSwitch"), {target : {value : true}});

        expect(props.onChange).toHaveBeenCalled();
    });
});