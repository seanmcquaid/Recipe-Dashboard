import React from "react";
import styled from "styled-components";
import HeaderCell from "./HeaderCell/HeaderCell";
import TableHeadRow from "./TableHeadRow/TableHeadRow";

const TableHead = ({headerCellNames}) => (
    <StyledTableHead>
        <TableHeadRow>
            {headerCellNames.map((name, index) => <HeaderCell colSpan="1" key={index}>{name}</HeaderCell>)}
        </TableHeadRow>
    </StyledTableHead>
);

const StyledTableHead = styled.thead`
    font-family: "Inconsolata", monospace;
    font-size : 1rem;
    width : 100%;
`;

export default TableHead;