import React from "react";
import TextInput from "./TextInput";
import { render } from "@testing-library/react";

describe("<TextInput/>", () => {
    test("Text Input Renders Correctly", () => {
        const props = {
            value : "Text Input Here",
            onChange : jest.fn(),
        };

        const {getByDisplayValue} = render(<TextInput {...props}/>)

        expect(getByDisplayValue("Text Input Here")).toBeInTheDocument();
    });
});