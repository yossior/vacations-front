import {
    combineReducers
} from 'redux';

const initialState = {
    vacations: []
}

const vacationsReducer = (state = initialState, action) => {
    debugger
    switch (action.type) {
        case 'VACS-UPDATE':
            return {
                ...state,
                vacations: action.payload.vacations
            }

        default:
            return state;
    }
}

export default combineReducers({
    vacationsReducer
});