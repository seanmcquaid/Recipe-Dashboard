import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import Layout from './Layout';

describe('<Layout/>', () => {
    test("Layout correctly displays children", () => {
        const {getByText} = render(<Layout>Children Here!</Layout>)
        expect(getByText("Children Here!")).toBeInTheDocument();
    });
});