export const compareEqual = (equal, result) => {
    console.log("equal, result", equal, result);
    if (equal === result) {
        return true;
    } else {
        return false;
    }
};

export const createProblem = () => {
    let firsfNumber = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
    let secondNumber = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
    if (firsfNumber > secondNumber) {
        return {
            equation: `${firsfNumber} - ${secondNumber}`,
            equal: firsfNumber - secondNumber,
        };
    } else {
        return {
            equation: `${firsfNumber} + ${secondNumber}`,
            equal: firsfNumber + secondNumber,
        };
    }
};
