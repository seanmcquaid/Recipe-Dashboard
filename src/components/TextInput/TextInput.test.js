import React from "react";
import TextInput from "./TextInput";
import { render, fireEvent } from "@testing-library/react";

describe("<TextInput/>", () => {
    test("Text Input Renders Correctly", () => {
        const props = {
            value : "Text Input Here",
            onChange : jest.fn(),
        };

        const {getByTestId} = render(<TextInput data-testid="testTextInput" {...props} />)

        expect(getByTestId("testTextInput")).toBeInTheDocument();
    });

    test("Text Input on change works as expected", () => {
        const props = {
            value : "Text Input Here",
            onChange : jest.fn(),
        };

        const {getByTestId} = render(<TextInput data-testid="testTextInput" {...props}/>);

        fireEvent.change(getByTestId("testTextInput"), {target : {value : "Cheese"}});

        expect(props.onChange).toHaveBeenCalled();
    });
});