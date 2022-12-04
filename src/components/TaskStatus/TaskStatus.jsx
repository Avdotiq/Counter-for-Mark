import React from "react";
import styled from "styled-components";

function TaskStatus() {
    return (
        <StyledTaskStatus>
            <input readOnly></input>
            <input readOnly></input>
            <input readOnly></input>
        </StyledTaskStatus>
    );
}

export default TaskStatus;

const StyledTaskStatus = styled.div`
    position: absolute;
    top: 55px;
    left: 87px;
    display: flex;
    flex-direction: column;
    input:nth-of-type(1) {
        width: 40px;
        height: 30px;
    }
    input:nth-of-type(2) {
        width: 28px;
        height: 28px;
        margin-top: 24px;
    }
    input:nth-of-type(3) {
        width: 27px;
        height: 27px;
        margin-top: 31px;
    }
`;
