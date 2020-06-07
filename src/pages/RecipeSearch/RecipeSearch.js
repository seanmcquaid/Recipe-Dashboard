import React, {useState, useRef, useCallback} from "react";
import styled from "styled-components";
import axios from "axios";
import {apiKey, baseUrl} from "../../config";
import H1 from "../../components/H1/H1";
import H2 from "../../components/H2/H2";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import P from "../../components/P/P";
import TextInput from "../../components/TextInput/TextInput";
import Button from "../../components/Button/Button";
import Table from "../../components/Table/Table";
import Dropdown from "../../components/NumberDropdown/NumberDropdown";

const RecipeSearch = () => {
    const [searchText, setSearchText] = useState("");
    const [searchResultsInfo, setSearchResultsInfo] = useState({
        isLoading : false, 
        searchResults : [],
        errorMessage : null
    });
    const {isLoading, searchResults, errorMessage} = searchResultsInfo;
    const resultsToReturnOptions = [1, 5, 10, 20, 50, 100];
    const [amountOfResultsToReturn, setAmountOfResultsToReturn] = useState(10);

    const searchTextRef = useRef(null);

    const searchTextOnChangeHandler = useCallback(event => {
        setSearchText(event.target.value);
    },[]);

    const dropdownOnChangeHandler = useCallback(event => {
        setAmountOfResultsToReturn(parseInt(event.target.value));
    },[]);

    const searchFormSubmitHandler = useCallback(async event => {
        event.preventDefault();

        setSearchText("");
        searchTextRef.current.focus();

        if(amountOfResultsToReturn !== 10){
            setAmountOfResultsToReturn(10);
        }

        if(errorMessage){
            setSearchResultsInfo({
                ...searchResultsInfo,
                isLoading : true,
                errorMessage : null
            });
        }else {
            setSearchResultsInfo({
                ...searchResultsInfo,
                isLoading : true,
            }); 
        }

        await axios.get(`${baseUrl}/recipes/search?query=${searchText}&apiKey=${apiKey}&number=${amountOfResultsToReturn}`)
            .then(({data}) => {
                if(data.results.length > 0){
                    const timer = setTimeout(() => setSearchResultsInfo({
                        ...searchResultsInfo,
                        isLoading : false,
                        searchResults : data.results,
                    }), 1500);

                    return () => clearTimeout(timer);
                }else{
                    const timer = setTimeout(() => setSearchResultsInfo({
                        ...searchResultsInfo,
                        isLoading : false,
                        errorMessage : "There were no recipes for that ingredient, please try again!",
                    }), 1500);

                    return () => clearTimeout(timer);
                }
            })
            .catch(err => {
                const timer = setTimeout(() => setSearchResultsInfo({
                    ...searchResultsInfo,
                    isLoading : false,
                    errorMessage : "There was a problem finding a recipe! Try again later!"
                }), 1500);

                return () => clearTimeout(timer);
            });

    },[searchText, amountOfResultsToReturn, searchResultsInfo, errorMessage]);

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
                    <Dropdown
                        title="Amount Of Recipes"
                        value={amountOfResultsToReturn}
                        dropdownOptions={resultsToReturnOptions}
                        onChange={dropdownOnChangeHandler}
                    />
                    <Button
                        title="Search"
                        type="submit"
                    />
                </Form>
            </Header>
            <MainContent>
                {isLoading ? 
                    <LoadingSpinner isLoading={isLoading}/>: 
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