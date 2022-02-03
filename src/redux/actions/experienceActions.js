import * as actionTypes from './actionTypes';

export const createExperience = (exp) => {
    return {
        type: actionTypes.CREATE_NEW_EXPERIENCE,
        payload: exp,
    }
};
export const removeExperience = () => {
    return {
        type: actionTypes.REMOVE_EXPERIENCE,
    }
};