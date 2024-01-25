import { UPDATE_DATA_ORDER } from '../constants/appConstants';

const initialState = {
	isLoading: false,
	makerFee: '',
	takerFee: '',
	minPrice: '',
	maxPrice: '',
	cancelFeePercentage: '',
	weeklyVolumes: 0,
	thresholdVolume: 0,
	isEligibleForFeeReduction: false,
	isWhitelist: false,
	dataOrder: {
		spend: '',
		receive: '',
		orderId: '',
		type: ''
	}
};

export default function modalReducer(state = initialState, action) {
	switch (action.type) {
		case UPDATE_DATA_ORDER:
			return {
				...state,
				...action.data
			};
		default:
			return state;
	}
}
