import { ADD_FILTER, CLEAR_FILTER, REMOVE_FILTER } from "../constants/filterConst.js";

export const addFilter = (filter) => ({
    type: ADD_FILTER,
    filter
})

export const removeFilter = (filter) => ({
    type: REMOVE_FILTER,
    filter
})

export const clearFilter = () => ({
    type: CLEAR_FILTER
})