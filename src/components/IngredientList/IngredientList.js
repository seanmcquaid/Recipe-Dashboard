import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const IngredientList = React.memo(({ingredients, isMetric}) => (
    <StyledList data-testid="ingredientsList">
        {ingredients.map((ingredient)=> (
            <StyledListItem key={ingredient.id}>
                {ingredient.name} - {isMetric ? ingredient.metricMeasurement : ingredient.usMeasurement}
            </StyledListItem>)
        )}
    </StyledList>
));

const StyledList = styled.ul`
    list-style : none;
    font-family: "Montserrat", sans-serif;
    font-size : 1rem;
`;

const StyledListItem = styled.li`
    margin : 1rem;
`;

IngredientList.propTypes = {
    ingredients : PropTypes.arrayOf(PropTypes.object.isRequired).isRequired, 
    isMetric : PropTypes.bool.isRequired,
};

export default IngredientList;