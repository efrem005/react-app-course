import { ADD_POSITIONS } from "../constants/positionConst.js";

export const addPositions = (positions) => ({
    type: ADD_POSITIONS,
    positions
})