import styled from "styled-components";
import { Link } from "react-router-dom";

const LinkButton = styled(Link)`
    padding : 1rem;
    margin : 1rem;
    border : 2px solid black;
    border-radius : 6px;
    width : 100px;
    outline : none;
    font-family: "Montserrat", sans-serif;
    font-size : 1rem;
    text-decoration : none;
    color : black;
`;

export default LinkButton;