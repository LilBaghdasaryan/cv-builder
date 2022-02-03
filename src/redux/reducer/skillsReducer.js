import * as actionTypes from '../actions/actionTypes';


export default (state = {}, action) => {
    switch (action.type){
        case actionTypes.CREATE_NEW_SKILLS:
           return Object.assign({}, action.payload);
        case actionTypes.REMOVE_SKILLS:
            return {}
        default:
            return state;
    }
};