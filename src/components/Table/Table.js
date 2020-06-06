import React, { useMemo } from "react";
import styled from "styled-components";
import TableHead from "./TableHead/TableHead";
import TableBody from "./TableBody/TableBody";

const Table = React.memo(({data}) => {
    const headerCellNames = useMemo(() => ["Recipe Name", "Link For More Info"], []);

    return (
        <StyledTable data-testid="recipeTable">
            <TableHead headerCellNames={headerCellNames}/>
            <TableBody data={data}/>
        </StyledTable>
    );
});

const StyledTable = styled.table`
    height : 100%;
    border : 2px solid black;
    width : 100%;
    max-width : 80%;
    margin : 1rem 0;
`;

export default Table;