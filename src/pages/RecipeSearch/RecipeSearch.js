import React from "react";
import styled from "styled-components";
import H1 from "../../components/H1/H1";

const RecipeSearch = () => {
    return(
        <>
            <Header>
                <H1>Recipe Search Dashboard</H1>
            </Header>
            <MainContent>
                
            </MainContent>
        </>
    )
};

const Header = styled.header`
    text-align : center;
    margin : 1rem;
    padding : 1rem;
`;

const MainContent = styled.main`
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    width : 100%;
`;

export default RecipeSearch;