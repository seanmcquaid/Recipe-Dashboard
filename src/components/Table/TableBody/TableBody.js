import React from "react";
import styled from "styled-components";
import TableBodyRow from "./TableBodyRow/TableBodyRow";

const TableBody = ({data}) => (
    <StyledTableBody>
        {data.map((recipe, i) => <TableBodyRow rowInfo={recipe} key={recipe.id}/>)}
    </StyledTableBody>
);

const StyledTableBody = styled.tbody`
`;

export default TableBody;