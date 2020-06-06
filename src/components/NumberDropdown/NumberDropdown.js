import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const NumberDropdown = ({title, value, dropdownOptions, onChange}) => (
    <StyledContainer>
        <StyledLabel>{title}</StyledLabel>
        <StyledDropdown value={value} onChange={onChange} data-testid={`${title}Dropdown`}>
            {dropdownOptions.map((option, index) => <StyledDropdownOption value={option} key={index}>{option}</StyledDropdownOption>)}
        </StyledDropdown>
    </StyledContainer>
);

const StyledContainer = styled.div`
    margin : 0.5rem;
    font-family: "Montserrat", sans-serif;
    font-size : 1rem;
    width : 100%;
`;

const StyledLabel = styled.label`
    margin : 0.5rem;
`;

const StyledDropdown = styled.select`
    outline : none;
`;

const StyledDropdownOption = styled.option`
`;

NumberDropdown.propTypes = {
    title : PropTypes.string.isRequired,
    value : PropTypes.number.isRequired,
    dropdownOptions : PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    onChange : PropTypes.func.isRequired,
};

export default NumberDropdown;