import { UPDATE_DATA_SOCKET } from '../constants/appConstants';

const initialState = {
    socket: undefined
};

export default function socketReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_DATA_SOCKET:
            return {
                ...state,
                ...action.data
            };
        default:
            return state;
    }
}