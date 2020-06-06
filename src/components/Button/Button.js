import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Button = React.memo(({onClick, type, title}) => (
    <StyledButton onClick={onClick} type={type} data-testid={`${title}Button`}>
        {title}
    </StyledButton>
));

const StyledButton = styled.button`
    padding : 1rem;
    margin : 1rem;
    border : 2px solid black;
    border-radius : 6px;
    width : 100px;
    outline : none;
    font-family: "Montserrat", sans-serif;
    font-size : 1rem;
`;

Button.propTypes = {
    onClick : PropTypes.func,
    title : PropTypes.string.isRequired,
    type : PropTypes.string.isRequired,
};

export default Button;