import * as actionTypes from '../actions/actionTypes';

const toggleReducer = (state = false, action) => {
    switch (action.type) {
        case actionTypes.SIDEBAR_TOGGLE: 
            return !state
        default:
            return state;
    }
};

export default toggleReducer;