import React from "react"
import styled from "styled-components";
import PropTypes from "prop-types";

const Layout = ({children}) => (
    <PageContainer>
        {children}
    </PageContainer>
);

const PageContainer = styled.div`
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
    width : 100vw;
    height : 100vh;
`;

Layout.propTypes = {
    children : PropTypes.any,
};

export default Layout;