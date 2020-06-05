import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Dropdown = ({title, value, dropdownOptions, onChange}) => (
    <StyledContainer>
        <StyledLabel>{title}</StyledLabel>
        <StyledDropdown value={value} onChange={onChange} data-testid={`${title}Dropdown`}>
            {dropdownOptions.map((option, index) => <StyledDropdownOption value={option} key={index}>{option}</StyledDropdownOption>)}
        </StyledDropdown>
    </StyledContainer>
);

const StyledContainer = styled.div`
`;

const StyledLabel = styled.label`
`;

const StyledDropdown = styled.select`
`;

const StyledDropdownOption = styled.option`
`;

Dropdown.propTypes = {
    title : PropTypes.string.isRequired,
    value : PropTypes.string.isRequired,
    dropdownOptions : PropTypes.array.isRequired,
    onChange : PropTypes.func.isRequired,
};

export default Dropdown;