import React from "react";
import styled from "styled-components";

function EquationScreen(data) {
    const { equation } = data;
    return (
        <StyledEquation>
            <input readOnly value={equation} />
        </StyledEquation>
    );
}

export default EquationScreen;

const StyledEquation = styled.div`
    position: absolute;
    top: 50px;
    left: 165px;
    input {
        width: 275px;
        height: 130px;
        border: none;
        font-size: 20px;
    }
`;
