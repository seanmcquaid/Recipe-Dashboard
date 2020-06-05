import React, {useState, useRef} from "react";
import styled from "styled-components";
import H1 from "../../components/H1/H1";
import H2 from "../../components/H2/H2";
import TextInput from "../../components/TextInput/TextInput";

const RecipeSearch = () => {
    const [searchText, setSearchText] = useState("");
    const searchTextRef = useRef(null);

    const searchTextOnChangeHandler = event => {
        setSearchText(event.target.value);
    };

    return(
        <>
            <Header>
                <H1>Recipe Search Dashboard</H1>
                <H2>Type in your desired ingredient down below!</H2>
                <TextInput 
                    value={searchText} 
                    onChange={searchTextOnChangeHandler} 
                    ref={searchTextRef}
                />
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
    height : 100%;
`;

export default RecipeSearch;