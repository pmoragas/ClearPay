import { CUSTOMERS_UPDATE, CUSTOMER_DETAIL_UPDATE, TRANSFER_EXECUTED, TRANSFER_ERROR, RESET_ERROR } from './actionNames';
import ClearPayApi from 'services/clearPayApi';

export const getCustomers = () => async (dispatch) => {
	try {
		const response = await ClearPayApi.getCustomers();

		dispatch({
            type: CUSTOMERS_UPDATE,
            payload: response,
        });
	} catch (error) {
		console.log(error)
	}
};

export const getCustomer = (id) => async (dispatch) => {
	try {
		const customer = await ClearPayApi.getCustomer(id);
		const wallets = await ClearPayApi.getCustomerWallets(id);

		dispatch({
            type: CUSTOMER_DETAIL_UPDATE,
            payload: { ...customer, wallets: wallets },
        });
	} catch (error) {
		console.log(error)
	}
};

export const resetErrorMsg = (id) => async (dispatch) => {
	dispatch({
		type: RESET_ERROR,
		payload: {},
	});
};

export const executeTransfer = (values) => async (dispatch) => {
	try {
		await ClearPayApi.executeTransfer(values);

		dispatch({
            type: TRANSFER_EXECUTED,
            payload: {},
        });
	} catch (error) {
		const { response: { status } = {} } = error;

		let msg;
		switch (status) {
			case 400:
				msg = "The amount is invalid or the transfer is circular.";
				break;
			case 404:
				msg = "Destination wallet has not been found!";
				break;
			default:
				msg = "Error. Please try again.";
		}

		dispatch({
            type: TRANSFER_ERROR,
            payload: {errorMsg: msg},
        });
	}
};
