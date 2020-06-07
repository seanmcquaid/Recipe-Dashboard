import React, { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import H1 from "../../components/H1/H1";
import H2 from "../../components/H2/H2";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import axios from "axios";
import { baseUrl, apiKey } from "../../config";
import LinkButton from "../../components/LinkButton/LinkButton";
import P from "../../components/P/P";
import IngredientList from "../../components/IngredientList/IngredientList";
import ToggleSwitch from "../../components/ToggleSwitch/ToggleSwitch";

export const getIngredientNameAndMeasurementInfo = object => {
    if(!object.extendedIngredients){
        return [];
    }

    const ingredientsWithMeasurements = object.extendedIngredients.map(ingredient => {
        return {
            id : ingredient.id,
            name : ingredient.name,
            metricMeasurement : `${ingredient.measures.metric.amount} ${ingredient.measures.metric.unitLong}`,
            usMeasurement : `${ingredient.measures.us.amount} ${ingredient.measures.us.unitLong}`
        };
    });

    return ingredientsWithMeasurements;

};

const RecipeInfo = () => {
    const {recipeId} = useParams();
    const [requestedRecipeInfo, setRequestedRecipeInfo] = useState({
        isLoading : true,
        recipeInfo : {},
        errorMessage : null
    });
    const {isLoading, recipeInfo, errorMessage} = requestedRecipeInfo
    const [isMetric, setIsMetric] = useState(false);
    const ingredientsInfo = useMemo(() => getIngredientNameAndMeasurementInfo(recipeInfo), [recipeInfo]); 

    useEffect(() => {
        if(isLoading){
            axios.get(`${baseUrl}/recipes/${recipeId}/information?includeNutrition=false&apiKey=${apiKey}`)
                .then(({data}) => {
                    const timer = setTimeout(() => setRequestedRecipeInfo({
                        ...requestedRecipeInfo,
                        isLoading : false,
                        recipeInfo : data,
                    }), 1500);

                    return () => clearTimeout(timer);
                })
                .catch(err => console.log(err));
        }
    }, [recipeId, isLoading, requestedRecipeInfo]);

    const toggleSwitchOnClickHandler = event => {
        setIsMetric(bool => !bool);
    };

    if(isLoading){
        return <LoadingSpinner isLoading={isLoading}/>;
    }

    if(errorMessage){
        return (
            <>
                <H1 data-testid="recipeInfoPageHeader">{errorMessage}</H1>
                <LinkButton to="/">Home</LinkButton>
            </>
        );
    }

    const {title, instructions, readyInMinutes} = recipeInfo;

    return(
        <>
            <Header>
                <H1 data-testid="recipeInfoPageHeader">{title}</H1>
                <H2 data-testid="timeToServce">Ready in {readyInMinutes} minutes</H2>
                <P>{instructions}</P>
                <ToggleSwitch
                    title="Is Metric?" 
                    value={isMetric} 
                    onChange={toggleSwitchOnClickHandler}
                />
            </Header>
            <MainContent>
                <H2>Ingredients - {isMetric ? "Metric Measurements" : "US Measurements"}</H2>
                <IngredientList ingredients={ingredientsInfo} isMetric={isMetric}/>
                <LinkButton to="/">Home</LinkButton>
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
    justify-content : center;
`;

export default RecipeInfo;