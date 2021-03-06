import React from "react";
import styled from "styled-components";

const TextInput = React.memo(styled.input`
    padding : 0.5rem;
    margin : 0.5rem;
    width : 100%;
    max-width : 400px;
    border: none;
    border-bottom: 2px solid black;
    outline : none;
    font-family: "Montserrat", sans-serif;
    font-size : 1rem;
`);

export default TextInput;