import React, {useState, useRef, useCallback} from "react";
import styled from "styled-components";
import H1 from "../../components/H1/H1";
import H2 from "../../components/H2/H2";
import P from "../../components/P/P";
import TextInput from "../../components/TextInput/TextInput";
import Button from "../../components/Button/Button";
import Table from "../../components/Table/Table";
import axios from "axios";
import {apiKey, baseUrl} from "../../config";

const RecipeSearch = () => {
    const [searchText, setSearchText] = useState("");
    const [isLoadingSearchResults, setIsLoadingSearchResults] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [searchResults, setSearchResults] = useState([]);
    const amountOfResultsToReturn = [1, 5, 10, 20, 50, 100];

    const searchTextRef = useRef(null);

    const searchTextOnChangeHandler = event => {
        setSearchText(event.target.value);
    };

    const searchFormSubmitHandler = useCallback(async event => {
        event.preventDefault();

        setErrorMessage(null);

        setSearchText("");
        searchTextRef.current.focus();

        setIsLoadingSearchResults(true);

        await axios.get(`${baseUrl}/recipes/search?query=${searchText}&apiKey=${apiKey}`)
            .then(({data}) => {
                if(data.results.length > 0){
                    setSearchResults(data.results);
                }else{
                    setErrorMessage("There were no recipes for that ingredient, please try again!");
                }
            })
            .catch(err => {
                setErrorMessage("There was an issue finding recipes for your ingredient, please try again!");
            });
        
        setIsLoadingSearchResults(false);    
    },[searchText]);

    return(
        <>
            <Header>
                <H1 data-testid="recipeSearchPageHeader">Recipe Search Dashboard</H1>
                <H2 data-testid="recipeSearchPageSubHeader">Type in your desired ingredient down below!</H2>
                <Form data-testid="recipeSearchForm" onSubmit={searchFormSubmitHandler}>
                    <TextInput
                        data-testid="searchTextInput"
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
                {isLoadingSearchResults ? 
                    <div data-testid="loadingSpinner">Loading</div> : 
                    errorMessage ? 
                        <P data-testid="errorMessage">{errorMessage}</P> : 
                        <Table data={searchResults}/>
                }
            </MainContent>
        </>
    )
};

const Header = styled.header`
    text-align : center;
    width : 100%;
`;

const MainContent = styled.main`
    height : 100%;
    width : 100%;
    display : flex;
    flex-direction : column;
    align-items : center;
    overflow-x: auto;
    overflow-y : auto;
`;

const Form = styled.form`
    width : 100%;
`;

export default RecipeSearch;