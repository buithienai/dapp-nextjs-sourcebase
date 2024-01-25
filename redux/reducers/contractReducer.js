import { UPDATE_DATA_CONTRACT } from '../constants/appConstants';

const initialState = {
    chainId: '',
    binanceChain: null,
    isBinanceChain: false
};

export default function contractReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_DATA_CONTRACT:
            return {
                ...state,
                ...action.data
            };
        default:
            return state;
    }
}