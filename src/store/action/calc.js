export const updateProblem = (dispatch, equation, equal) => {
    dispatch({
        type: "UPDATE_PROBLEM",
        data: {
            equation,
            equal,
        },
    });
};

export const updateСurrentTask = (dispatch) => {
    dispatch({
        type: "UPDATE_CURRENT_TASK",
    });
};

export const updateTaskOne = (dispatch, result) => {
    dispatch({
        type: "UPDATE_TASK_ONE",
        result,
    });
};

export const updateTaskTwo = (dispatch, result) => {
    dispatch({
        type: "UPDATE_TASK_TWO",
        result,
    });
};

export const updateTaskThree = (dispatch, result) => {
    dispatch({
        type: "UPDATE_TASK_THREE",
        result,
    });
};
