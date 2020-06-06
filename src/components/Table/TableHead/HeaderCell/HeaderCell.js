import React from "react";
import styled from "styled-components";

const HeaderCell = React.memo(styled.th`
    border : 2px solid black;
    width : 50%;
`);

export default HeaderCell;