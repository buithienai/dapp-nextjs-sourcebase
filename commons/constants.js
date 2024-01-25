export const PAGE_SIZE = 12;
export const gasPrice = process.env.APP_ENV === 'development' ? 16 : 230;
export const ACCOUNT = '0xb446eee5ae00a85d057618b1d153c48b1b31a668';
export const ADDRESS_INVALID = '0x0000000000000000000000000000000000000000';
export const MIN_APPROVE = 100000;
export const DURATION_FIXED = 24 * 60 * 60;

export const DATA_TABLE = {
	data: [],
	page: 0,
	totalPage: 0
};

export const DETECT_TYPE = {
	ADDRESS: 'address',
	USERNAME: 'userName'
};

export const MESSAGE = {};

export const SOCKET = {
	register: 'register',
	registered: 'registered'
};

export const TIME = {
	DISMISS: 10000,
	UPDATE_RESULT: 9000,
	UPDATE_BALANCE: 20000,
	APPROVE: 30000,
	TIME_UPDATE: 3000
};
