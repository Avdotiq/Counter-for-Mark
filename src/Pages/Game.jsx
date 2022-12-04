import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import Calc from "../components/Calc/Calc";
import EquationScreen from "../components/EquationScreen/EquationScreen";
import {
    updateTaskOne,
    updateTaskTwo,
    updateTaskThree,
    updateСurrentTask,
    updateProblem,
} from "../store/action/calc";
import { compareEqual } from "../helpers/calcReduser";
import CALC_IMG from "../image/calc.svg";
import TaskStatus from "../components/TaskStatus/TaskStatus";

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
        <StyledGame>
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
        </StyledGame>
    );
}

export default Game;

const StyledGame = styled.div`
    height: 100vh;
    background-image: url(${CALC_IMG});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
`;

const StyledResult = styled.div`
    position: absolute;
    bottom: 75px;
    left: 227px;

    input {
        height: 70px;
        border: none;
        font-size: 20px;
    }
`;
