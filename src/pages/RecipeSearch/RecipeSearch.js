import React, {useState, useRef, useCallback} from "react";
import styled from "styled-components";
import H1 from "../../components/H1/H1";
import H2 from "../../components/H2/H2";
import TextInput from "../../components/TextInput/TextInput";
import Button from "../../components/Button/Button";

const RecipeSearch = () => {
    const [searchText, setSearchText] = useState("");
    
    const searchTextRef = useRef(null);

    const searchTextOnChangeHandler = event => {
        setSearchText(event.target.value);
    };

    const searchFormSubmitHandler = useCallback(event => {
        event.preventDefault();
        searchTextRef.current.focus();
        setSearchText("")
    },[]);

    return(
        <>
            <Header>
                <H1>Recipe Search Dashboard</H1>
                <H2>Type in your desired ingredient down below!</H2>
                <Form onSubmit={searchFormSubmitHandler}>
                    <TextInput 
                        value={searchText} 
                        onChange={searchTextOnChangeHandler} 
                        ref={searchTextRef}
                        placeholder="Type in your ingredient here!"
                    />
                    <Button
                        title="Search"
                        type="submit"
                    />
                </Form>
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

const Form = styled.form`
`;

export default RecipeSearch;