import { ADD_POSITIONS } from "../constants/positionConst.js";

export const positionReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_POSITIONS:
            return action.positions

        default:
            return state
    }
}