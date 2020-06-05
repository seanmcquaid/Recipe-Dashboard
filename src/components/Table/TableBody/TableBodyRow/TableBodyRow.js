import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import LinkButton from "../../../LinkButton/LinkButton";

const TableRow = ({rowInfo}) => (
    <StyledTableRow data-testid={`${rowInfo.title}TableRow`}>
        <StyledTableColumn data-testid={`${rowInfo.title}Title`}>{rowInfo.title}</StyledTableColumn>
        <StyledTableColumn>
            <LinkButton to={`/recipeInfo/${rowInfo.id}`} data-testid={`${rowInfo.title}LinkButton`}>Recipe Info</LinkButton>
        </StyledTableColumn>
    </StyledTableRow>
);

const StyledTableRow = styled.tr`
    font-family: "Montserrat", sans-serif;
    margin : 2rem;
    border : 2px solid black;
    text-align : center;
`;

const StyledTableColumn = styled.td`
    border : 2px solid black;
    padding : 2rem;
`;

TableRow.propTypes = {
    rowInfo : PropTypes.object.isRequired,
};

export default TableRow;