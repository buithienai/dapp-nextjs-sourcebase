import { toast } from 'react-toastify';
import Web3 from 'web3';
import { MESSAGE } from '../commons/constants';
import configs from '../configs';

export const checkWaitingFunction = async (contact, address) => {
	try {
		const web3 = new Web3(configs.linkRPC);
		const tokenContract = new web3.eth.Contract(contact.abi, contact.address);

		let config = await tokenContract.methods.config().call({
			from: address
		});

		const waitingFunctionEnabled = config.waitingFunctionEnabled;
		const wait = config.wait;

		if (waitingFunctionEnabled) {
			let isWaitingOwner = await tokenContract.methods.waitingList(address).call({
				from: address
			});

			if (!isWaitingOwner && !wait) {
				return false;
			}

			toast.error(MESSAGE.waiting);
			return true;
		} else {
			if (!wait) {
				return false;
			}

			toast.error(MESSAGE.waiting);
			return true;
		}
	} catch (error) {
		console.log('error checkWaiting', error);
		return true;
	}
};
