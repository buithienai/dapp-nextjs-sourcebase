import makeRequest from './httpServices';
import configs from '../../configs/index';

export function getMaintenanceMode() {
	const options = {};
	options.method = 'GET';
	options.url = configs.urlApi + `configuration/get-maintenance-mode`;
	options.headers = {
		'Content-Type': 'application/json'
	};

	return makeRequest(options);
}

export function getRandomUserName() {
	const options = {};
	options.method = 'GET';
	options.url = configs.urlApi + `users/userName`;
	options.headers = {
		'Content-Type': 'application/json'
	};

	return makeRequest(options);
}

export function checkUserNameExists(userName) {
	const options = {};
	options.method = 'GET';
	options.url = configs.urlApi + `users/userNameExists?userName=${userName}`;
	options.headers = {
		'Content-Type': 'application/json'
	};

	return makeRequest(options);
}

export function userAddressFromUserName(userName) {
	const options = {};
	options.method = 'GET';
	options.url = configs.urlApi + `users/userAddressFromUserName?userName=${userName}`;
	options.headers = {
		'Content-Type': 'application/json'
	};

	return makeRequest(options);
}

export function getAddressReferral() {
	const options = {};
	options.method = 'GET';
	options.url = configs.urlApi + `referrals/first`;
	options.headers = {
		'Content-Type': 'application/json'
	};

	return makeRequest(options);
}
