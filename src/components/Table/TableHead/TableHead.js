import React from "react";
import styled from "styled-components";
import HeaderCell from "./HeaderCell/HeaderCell";
import TableHeadRow from "./TableHeadRow/TableHeadRow";

const TableHead = React.memo(({headerCellNames}) => (
    <StyledTableHead data-testid="recipeTableHead">
        <TableHeadRow>
            {headerCellNames.map((name, index) => <HeaderCell key={index}>{name}</HeaderCell>)}
        </TableHeadRow>
    </StyledTableHead>
));

const StyledTableHead = styled.thead`
    font-family: "Inconsolata", monospace;
    font-size : 1rem;
    width : 100%;
`;

export default TableHead;