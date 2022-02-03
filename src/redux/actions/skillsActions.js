import * as actionTypes from './actionTypes';

export const createSkills = (data) => {
    return {
        type: actionTypes.CREATE_NEW_SKILLS,
        payload: data,
    }
};

export const removeSkills = () => {
    return {
        type: actionTypes.REMOVE_SKILLS,
    }
};