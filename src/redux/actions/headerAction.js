 import * as actionTypes from './actionTypes';

export const createHeader = (header) => {
    return {
        type: actionTypes.CREATE_NEW_HEADER,
        payload: header,
    }
};

 export const removeHeader = () => {
     return {
         type: actionTypes.REMOVE_HEADER,
     }
 };