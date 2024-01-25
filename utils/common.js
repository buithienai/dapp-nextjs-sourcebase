import crypto from 'crypto';
import { toast } from 'react-toastify';
import configs from '../configs/index';
import Web3 from 'web3';

export function isEmail(email) {
	var re = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/;
	return re.test(String(email).toLowerCase());
}

export function isNumber(number) {
	var re = /^[0-9]+$/;
	return re.test(number);
}

export function checkForSpecialChar(text) {
	var re = /^[^a-zA-Z0-9]+$/;
	return re.test(String(text));
}

export function isAddress(address) {
	var re = /^0x[a-fA-F0-9]{40}$/;
	return re.test(address);
}

export function formatNumber(number) {
	if (number === 0) {
		return 0;
	}

	if (number === '-') {
		return '-';
	}

	if (parseFloat(number) - parseInt(number) === 0) {
		return formatNumberCurrent(parseInt(number));
	}

	let index = number.indexOf('.');
	if (index !== -1) {
		let result = number
			.slice(0, index)
			.toString()
			.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
		result += number.slice(index, number.length);
		return result;
	}

	let result = number
		.slice(index, 1)
		.toString()
		.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
	return result;
}

export function formatNumberCurrent(number) {
	let result = number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
	return result;
}

export function toFixedCustom(num, fixed) {
	fixed = fixed || 0;
	fixed = Math.pow(10, fixed);
	return Math.floor(num * fixed) / fixed;
}

export function customNumber(number, decimal = 2) {
	if (number === '-' || isNaN(number)) {
		return '-';
	}

	if (number === 0 || number === undefined || number === '') {
		return 0;
	}

	parseFloatFixedNoRound(number, decimal);

	let result = truncateDecimals(number, decimal + 1);

	result = result.toFixed(decimal);

	if (parseFloat(result) - parseInt(result) === 0) {
		return formatNumberCurrent(parseInt(result));
	}

	result = Number(result).toString();
	return formatNumber(result);
}

export function makeMeTwoDigits(value) {
	return (value < 10 ? '0' : '') + value;
}

export const parseFloatFixedNoRound = (value, decimals = 3) => {
	if (value === 0 || value === undefined || value === '-' || value === '') {
		return 0;
	}

	const firstPart =
		value > 0 ? Math.floor(`${value}e${decimals}`) : Math.ceil(`${value}e${decimals}`);
	const secondPart = `e-${decimals}`;
	let result = Number(`${firstPart}${secondPart}`);
	result = result.toFixed(decimals);

	if (parseFloat(result) - parseInt(result) === 0) {
		return formatNumberCurrent(parseInt(result));
	}

	return result;
};

export const parseFloatFixed = (value, number = 1) => {
	const data = parseFloat(value).toFixed(number);
	return Number(data);
};

export function truncateTxHash(str, n = 5) {
	let string = str.substring(n + 2, 66 - n);
	return str.replace(string, '...');
}

export function showToastMessage(message) {
	if (message === 'Not found') {
		return;
	}

	return toast.error(message);
}

export function truncateDecimals(number, digits = 3) {
	var multiplier = Math.pow(10, digits),
		adjustedNum = number * multiplier,
		truncatedNum = Math[adjustedNum < 0 ? 'ceil' : 'floor'](adjustedNum);

	return truncatedNum / multiplier;
}

export function truncateAddress(str, n = 15) {
	let string = str.substring(n + 2, 42 - n);
	return str.replace(string, '...');
}

export function truncateText(str, n = 10) {
	let string = str.substring(n + 2, str.length - n);
	return str.replace(string, '...');
}

export const md5 = (value) => {
	return crypto.createHash('md5').update(value).digest('hex');
};

export const genSeed = () => {
	let firstMd5 = md5(Date.now().toString());
	return firstMd5 + md5(firstMd5);
};

export const debounce = (callback, actionName) => {
	if (window[actionName]) {
		clearTimeout(window[actionName]);
	}
	window[actionName] = setTimeout(callback, 300);
};

export const validateUserName = (str) => {
	let isError = false;
	if (typeof str !== 'string') {
		isError = true;
	}

	// 4 to 18 Characters
	if (str.length < 4 || str.length > 18) {
		isError = true;
	}

	// A-Z (uppercase)
	if (str !== str.toUpperCase()) {
		isError = true;
	}

	// Cannot start with number
	if (!isNaN(str.charAt(0))) {
		isError = true;
	}

	// No special characters
	const regex = /^[A-Z0-9]+$/;
	if (!regex.test(str)) {
		isError = true;
	}

	// No space between characters
	if (str.indexOf(' ') !== -1) {
		isError = true;
	}

	return isError;
};

export const capitalizeFirstLetter = (string) => {
	return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

export const detectType = (value) => {
	const addressRegex = /^0x[a-fA-F0-9]{40}$/;
	const userNameRegex = /^[A-Z][A-Z0-9]{3,17}$/;

	if (addressRegex.test(value)) {
		return 'address';
	} else if (userNameRegex.test(value.toUpperCase())) {
		return 'userName';
	}

	return null;
};

export const requestChangeChainNetwork = async (binanceChain) => {
	return binanceChain
		.request({
			method: 'wallet_switchEthereumChain',
			params: [{ chainId: configs.chainId[0] }]
		})
		.then(() => {
			return true;
		})
		.catch((err) => {
			console.error(err);
			toast.error(err.message);
			return false;
		});
};

export const handleDecimalsOnValue = (value) => {
	const regex = /([0-9]*[\.|\,]{0,1}[0-9]{0,2})/s;
	return value.match(regex)[0];
};

export const timeout = (ms) => {
	return new Promise((resolve) => setTimeout(resolve, ms));
};

export const getGasPrice = async () => {
	const web3 = new Web3(configs.linkRPC);
	const gas = await web3.eth.getGasPrice();

	return gas;
};

export function customNumberSuffix(number, precision = 2) {
	if (number === '-' || isNaN(number) || number === -Infinity) {
		return '-';
	}

	if (number === 0 || number === undefined || number === '') {
		return 0;
	}

	const abbrev = ['', 'K', 'M', 'B', 'T'];
	const unrangifiedOrder = Math.floor(Math.log10(Math.abs(number)) / 3);
	const order = Math.max(0, Math.min(unrangifiedOrder, abbrev.length - 1));
	let suffix = abbrev[order];

	if (order === 0) {
		return number.toFixed(precision);
	}

	const mod = number % Math.pow(10, order * 3);

	if (mod === 0) {
		return number / Math.pow(10, order * 3).toFixed(precision) + suffix;
	}

	return (number / Math.pow(10, order * 3)).toFixed(precision) + suffix;
}

export function calUSDTMoreToFreeTax(weeklyVolumes, thresholdVolume) {
	const volumeNeedToGet = thresholdVolume - weeklyVolumes;
	return volumeNeedToGet > 0 ? volumeNeedToGet : 0;
}

export function getTax(isEligibleForFeeReduction, takerFeePercentage, feeReductionPercentage) {
	return isEligibleForFeeReduction
		? takerFeePercentage - takerFeePercentage * (feeReductionPercentage / 100)
		: takerFeePercentage;
}
