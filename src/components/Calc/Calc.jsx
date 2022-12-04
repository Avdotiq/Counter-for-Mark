import React, { useEffect, useState } from "react";
import styled from "styled-components";

function Calc({ updateValue, compareResult, problem }) {
    const [result, setResult] = useState(null);

    const setNumbers = () => {
        let arr = [];
        for (let i = 0; i < 10; i++) {
            arr.push(i);
        }
        return arr;
    };

    const calcNumbers = setNumbers();

    const handleChange = (item) => {
        if (result === null) {
            setResult(item);
        } else {
            let splitResult = String(result).split(" ");
            splitResult.push(item);
            setResult(splitResult.join("") * 1);
        }
    };

    const handleReset = () => {
        setResult(null);
    };

    const handleSubmit = () => {
        compareResult(result);
    };

    useEffect(() => {
        updateValue(result);
    }, [result]);

    useEffect(() => {
        setResult(null);
        updateValue(result);
    }, [problem]);

    return (
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
            <input
                value="OK"
                type="button"
                readOnly
                onClick={() => handleSubmit()}
            />
        </StyledCalc>
    );
}

export default Calc;

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
