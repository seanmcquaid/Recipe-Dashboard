import React, { useMemo } from "react";
import styled from "styled-components";
import TableHead from "./TableHead/TableHead";
import TableBody from "./TableBody/TableBody";

const Table = ({data}) => {
    const headerCellNames = useMemo(() => ["Recipe Name", "Link For More Info"], []);

    return (
        <StyledTable>
            <TableHead headerCellNames={headerCellNames}/>
            <TableBody data={data}/>
        </StyledTable>
    );
}

const StyledTable = styled.table`
    table-layout: auto;
    height : 100%;
    border : 2px solid black;
    width : 100%;
    max-width : 800px;
    display : flex;
    flex-direction : column;
    align-items : center;
    margin : 2rem;
`;

export default Table;