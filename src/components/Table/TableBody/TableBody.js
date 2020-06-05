import React from "react";
import styled from "styled-components";
import TableBodyRow from "./TableBodyRow/TableBodyRow";

const TableBody = ({data}) => (
    <StyledTableBody data-testid="recipeTableBody">
        {data.map((recipe, i) => <TableBodyRow rowInfo={recipe} key={recipe.id}/>)}
    </StyledTableBody>
);

const StyledTableBody = styled.tbody`
    margin : 1rem;
    width : 100%;
    height : 100%;
`;

export default TableBody;