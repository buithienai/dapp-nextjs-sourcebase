import { UPDATE_DATA_USER } from '../constants/appConstants';

const initialState = {
	address: null,
	userName: null,
	inviterName: null,
	balanceMEN: '',
	balanceMENMax: '',
	balanceUSDT: '',
	balanceUSDTMax: '',
	avatar: null
};

export default function userReducer(state = initialState, action) {
	switch (action.type) {
		case UPDATE_DATA_USER:
			return {
				...state,
				...action.data
			};
		default:
			return state;
	}
}
