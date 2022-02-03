import * as actionTypes from '../actions/actionTypes';


export default (state = [], action) => {
    switch (action.type){
        case actionTypes.CREATE_NEW_EXPERIENCE:
            return [... action.payload ];
        case actionTypes.REMOVE_EXPERIENCE:
            return [];
        default:
            return state;
    }
};