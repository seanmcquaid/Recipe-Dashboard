import React, { useMemo } from "react";
import styled from "styled-components";
import TableHead from "./TableHead/TableHead";

const Table = ({data}) => {
    const headerCellNames = useMemo(() => ["Recipe Name", "Link For More Info"], []);

    return (
        <TableContainer>
            <StyledTable>
                <TableHead headerCellNames={headerCellNames}/>
            </StyledTable>
        </TableContainer>
    );
}

const TableContainer = styled.div`
    width : 100%;
    max-width : 800px;
    height : 300px;
    display : flex;
    flex-direction : column;
    align-items : center;
`;

const StyledTable = styled.table`
    table-layout: auto;
    width : 100%;
    height : 100%;
    border : 2px solid black;
    margin : 2rem;
`;

export default Table;