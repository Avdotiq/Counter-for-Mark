import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import Calc from "../components/Calc/Calc";
import EquationScreen from "../components/EquationScreen/EquationScreen";
import TaskStatus from "../components/TaskStatus/TaskStatus";
import {
    updateTaskOne,
    updateTaskTwo,
    updateTaskThree,
    updateСurrentTask,
    updateProblem,
} from "../store/action/calc";
import { compareEqual } from "../helpers/calcReduser";
import CALC_IMG from "../image/calc.svg";
import { Container, MainContainer } from "../components/Grid/Grid";

function Game() {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.calc);
    const [currentresult, setCurrentResult] = useState(null);
    console.log(data);

    const updateValue = (value) => {
        setCurrentResult(value);
    };

    const compareResult = (value) => {
        let result = compareEqual(data.problem.equal, value);
        if (data.currentTask === 1) {
            updateTaskOne(dispatch, result);
            updateСurrentTask(dispatch);
        } else if (data.currentTask === 2) {
            updateTaskTwo(dispatch, result);
            updateСurrentTask(dispatch);
        } else if (data.currentTask === 3) {
            updateTaskThree(dispatch, result);
            updateСurrentTask(dispatch);
        }
    };

    useEffect(() => {
        updateProblem(dispatch);
    }, [data.currentTask]);

    return (
        <MainContainer>
            <Container>
                <CalcImage src={CALC_IMG} alt="" />
                <Calc
                    updateValue={updateValue}
                    compareResult={compareResult}
                    problem={data.problem}
                />
                <EquationScreen equation={data.problem.equation} />
                <StyledResult>
                    <input
                        value={currentresult === null ? " " : currentresult}
                        key={currentresult}
                        readOnly
                        maxLength="3"
                    />
                </StyledResult>
                <TaskStatus />
            </Container>
        </MainContainer>
    );
}

export default Game;

const CalcImage = styled.img`
    margin: auto;
    width: 100%;
`;

const StyledResult = styled.div`
    position: absolute;
    bottom: 80px;
    left: 220px;

    input {
        height: 60px;
        border: none;
        font-size: 20px;
        background: none;
    }
`;
