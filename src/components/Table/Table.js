import React, { useMemo } from "react";
import styled from "styled-components";
import TableHead from "./TableHead/TableHead";

const Table = ({data}) => {
    const headerCellNames = useMemo(() => ["Recipe Name", "Link For More Info"], []);

    return (
        <StyledTable>
            <TableHead headerCellNames={headerCellNames}/>
        </StyledTable>
    );
}

const StyledTable = styled.table`
    
`;

export default Table;