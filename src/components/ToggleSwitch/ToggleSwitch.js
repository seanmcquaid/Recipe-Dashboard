import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const ToggleSwitch = ({title, value, onChange}) => (
    <StyledContainer>
        <StyledLabel>{title}</StyledLabel>
        <StyledToggleSwitch
            data-testid={`${title}ToggleSwitch`}
            checked={value}
            onChange={onChange}
            type="checkbox"
        />
    </StyledContainer>
);

const StyledContainer = styled.div`
    display : flex;
    flex-direction : row;
    justify-content : center;
    align-items : center;
`;

const StyledLabel = styled.label`
    font-family: "Montserrat", sans-serif;
    font-size : 1rem;
`;

const StyledToggleSwitch = styled.input`
    outline : none;
    margin : 0 1rem;
    border-radius : 2px;
`;

ToggleSwitch.propTypes = {
    title : PropTypes.string.isRequired,
    value : PropTypes.bool.isRequired,
    onChange : PropTypes.func.isRequired,
};

export default ToggleSwitch;