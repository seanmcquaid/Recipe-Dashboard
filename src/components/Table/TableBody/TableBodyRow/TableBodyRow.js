import React from "react";
import styled from "styled-components";
import Button from "../../../Button/Button";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import LinkButton from "../../../LinkButton/LinkButton";

const TableRow = ({rowInfo}) => (
    <StyledTableRow data-testid={`${rowInfo.title}TableRow`}>
        <StyledTableColumn data-testid={`${rowInfo.title}Title`}>{rowInfo.title}</StyledTableColumn>
        <StyledTableColumn>
            <LinkButton to={`/recipeInfo/${rowInfo.id}`} data-testid={`${rowInfo.title}LinkButton`}></LinkButton>
        </StyledTableColumn>
    </StyledTableRow>
);

const StyledTableRow = styled.tr`
    font-family: "Montserrat", sans-serif;
`;

const StyledTableColumn = styled.td``;

TableRow.propTypes = {
    rowInfo : PropTypes.object.isRequired,
};

export default TableRow;