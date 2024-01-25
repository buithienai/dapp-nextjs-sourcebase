import makeRequest from './httpServices';
import configs from '../../configs/index';

export function userLogin(data) {
	const options = {};
	options.method = 'POST';
	options.url = configs.urlApi + 'sessions/user';
	options.headers = {
		'Content-Type': 'application/json'
	};
	options.data = JSON.stringify(data);

	return makeRequest(options);
}

export function getUserProfile(accessToken, address) {
	const options = {};
	options.method = 'GET';
	options.url = configs.urlApi + 'users/me';
	options.headers = getHeaders(accessToken, address);

	return makeRequest(options);
}

export function getUserMessage(address) {
	const options = {};
	options.method = 'GET';
	options.url = configs.urlApi + `users/message?address=${address}`;
	options.headers = {
		'Content-Type': 'application/json'
	};

	return makeRequest(options);
}

export function checkUserExists(address) {
	const options = {};
	options.method = 'GET';
	options.url = configs.urlApi + `users/exists?address=${address}`;
	options.headers = {
		'Content-Type': 'application/json'
	};

	return makeRequest(options);
}

const getHeaders = (accessToken, address) => {
	return {
		'Content-Type': 'application/json',
		Authorization: 'Bearer ' + accessToken,
		'User-Address': address ? address : ''
	};
};
