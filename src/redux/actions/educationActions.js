import * as actionTypes from './actionTypes';

export const createEducation = (edu) => {
    return {
        type: actionTypes.CREATE_NEW_EDUCATION,
        payload: edu,
    }
};
export const removeEducation = (edu) => {
    return {
        type: actionTypes.REMOVE_EDUCATION,
    }
};