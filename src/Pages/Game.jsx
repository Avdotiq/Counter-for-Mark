import React, { useState } from "react";
import styled from "styled-components";
import CALC_IMG from "../image/calc.svg";

function Game() {
    const [result, setResult] = useState(null);

    const handleChange = (item) => {
        if (result === null) {
            setResult(item);
        } else {
            let splitResult = String(result).split(" ");
            splitResult.push(item);
            setResult(splitResult.join(""));
        }
    };

    const handleReset = () => {
        setResult(null);
    };

    const setNumbers = () => {
        let arr = [];
        for (let i = 0; i < 10; i++) {
            arr.push(i);
        }
        return arr;
    };

    const calcNumbers = setNumbers();

    return (
        <StyledGame>
            <StyledCalc>
                {calcNumbers.map((item, index) => (
                    <input
                        key={index}
                        value={item}
                        type="button"
                        readOnly
                        onClick={() => handleChange(item)}
                    />
                ))}
                <input
                    value="C"
                    onClick={() => handleReset()}
                    type="button"
                    readOnly
                />
                <input value="OK" type="button" readOnly />
            </StyledCalc>
            <StyledResult>
                <input
                    value={result === null ? " " : result}
                    key={result}
                    readOnly
                />
            </StyledResult>
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

const StyledCalc = styled.div`
    position: absolute;
    right: 25px;
    top: 50%;
    transform: translateY(-50%);
    display: grid;
    grid-template-columns: 40px 40px 40px;
    grid-template-rows: 40px 40px 40px 40px;
    gap: 10px;
`;

const StyledResult = styled.div`
    position: absolute;
    bottom: 68px;
    left: 227px;

    input {
        height: 80px;
        border: none;
        font-size: 20px;
    }
`;
