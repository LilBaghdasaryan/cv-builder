import * as actionTypes from '../actions/actionTypes';


export default (state = {}, action) => {
    switch (action.type){
        case actionTypes.CREATE_NEW_HEADER:
            return {
                ...state,
                fullName: action.payload.fullName,
                phone: action.payload.phone,
                email: action.payload.email,
                city: action.payload.city,
                street: action.payload.street,
                building: action.payload.building,
                apartment: action.payload.apartment,
                postalCode: action.payload.postalCode,
            };
        case actionTypes.REMOVE_HEADER:
            return {};
        default:
            return state;
    }
};