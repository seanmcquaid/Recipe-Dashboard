import React from "react";
import styled from "styled-components";
import HeaderCell from "./HeaderCell/HeaderCell";
import TableRow from "./TableRow/TableRow";

const TableHead = ({headerCellNames}) => (
    <StyledTableHead>
        <TableRow>
            {headerCellNames.map((name, index) => <HeaderCell key={index}>{name}</HeaderCell>)}
        </TableRow>
    </StyledTableHead>
);

const StyledTableHead = styled.thead`
`;

export default TableHead;