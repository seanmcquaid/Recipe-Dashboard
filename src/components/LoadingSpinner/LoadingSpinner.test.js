import React from "react";
import LoadingSpinner from "./LoadingSpinner";
import {render, cleanup} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("<LoadingSpinner/>", () => {
    afterEach(cleanup);

    test("LoadingSpinner renders correctly", () => {
        const props = {
            isLoading : true,
        };

        const {getByTestId} = render(<LoadingSpinner {...props}/>)

        expect(getByTestId("loadingSpinner")).toBeInTheDocument();
    });
});