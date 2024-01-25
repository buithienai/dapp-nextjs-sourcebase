import { UPDATE_DATA_MODAL } from '../constants/appConstants';

const initialState = {
    isPopupDetect: false
};

export default function modalReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_DATA_MODAL:
            return {
                ...state,
                ...action.data
            };
        default:
            return state;
    }
}