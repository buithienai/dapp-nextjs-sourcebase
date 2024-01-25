import Web3 from 'web3';

const convertNumberToWei = (value, fixed = 2) => {
	return Number((value * 1e6).toFixed(fixed));
};

const convertNumberToWei18 = (value) => {
	return Web3.utils.toWei(`${value}`);
};

const numberToGweiHex = (value) => {
	return Web3.utils.toHex(Web3.utils.toWei(`${value}`, 'gwei'));
};

function fromBigNumber(value) {
	const valueInHex = Web3.utils.numberToHex(value);
	return Web3.utils.hexToNumber(valueInHex);
}

const convertWeiBigNumberToNumber = (value, fixed = 2) => {
	return Number((value / 1e6).toFixed(fixed));
};

const convertBigNumberToNumber18 = (value) => {
	if (value) {
		const toWeiNumber = Web3.utils.fromWei(`${value}`);
		return parseFloat(toWeiNumber);
	}

	return null;
};

const buildOptions = async () => {
	let latestBlock = await Web3.eth.getBlockNumber();

	global.latestBlock = global.latestBlock || latestBlock - 10;

	if (global.latestBlock >= latestBlock) {
		return null;
	}

	const option = {
		fromBlock: global.latestBlock + 1,
		toBlock: latestBlock
	};

	global.latestBlock = latestBlock;

	return option;
};

const timeOut = async (period = 1000) => {
	await new Promise((resolve) => {
		setTimeout(() => {
			resolve();
		}, period);
	});
};

export {
	convertNumberToWei,
	numberToGweiHex,
	convertWeiBigNumberToNumber,
	buildOptions,
	timeOut,
	fromBigNumber,
	convertNumberToWei18,
	convertBigNumberToNumber18
};
