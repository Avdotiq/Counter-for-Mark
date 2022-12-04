import { createProblem } from "../../helpers/calcReduser";

const initialState = {
    level: {
        one: null,
        two: null,
        three: null,
    },
    task: {
        one: null,
        two: null,
        three: null,
    },
    problem: createProblem(),
    currentTask: 1,
};

export const calcReducer = (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_PROBLEM":
            return {
                ...state,
                problem: createProblem(),
            };
        case "UPDATE_CURRENT_TASK":
            return {
                ...state,
                currentTask: state.currentTask + 1,
            };
        case "UPDATE_TASK_ONE":
            return {
                ...state,
                task: {
                    ...state.task,
                    one: action.result,
                },
            };
        case "UPDATE_TASK_TWO":
            return {
                ...state,
                task: {
                    ...state.task,
                    two: action.result,
                },
            };
        case "UPDATE_TASK_THREE":
            return {
                ...state,
                task: {
                    ...state.task,
                    three: action.result,
                },
            };
        default:
            return state;
    }
};
