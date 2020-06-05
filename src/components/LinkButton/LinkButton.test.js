import React from "react";
import LinkButton from "./LinkButton";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import {HashRouter as Router} from "react-router-dom";

describe("<LinkButton/>", () => {
    afterEach(cleanup);

    test("LinkButton renders correctly", () => {

        const {getByText} = render(
            <Router>
                <LinkButton to="/">Test Link Button</LinkButton>
            </Router>);

        expect(getByText("Test Link Button")).toBeInTheDocument();
    });
});