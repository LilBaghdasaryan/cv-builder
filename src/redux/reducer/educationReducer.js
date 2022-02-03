import * as actionTypes from '../actions/actionTypes';


export default (state = {}, action) => {
    switch (action.type){
        case actionTypes.CREATE_NEW_EDUCATION:
            return {
                ...state,
                iName: action.payload.iName,
                graduation: action.payload.graduation,
                additionalInfo: action.payload.additionalInfo,
            };
        case actionTypes.REMOVE_EDUCATION:
            return {};
        default:
            return state;
    }
};