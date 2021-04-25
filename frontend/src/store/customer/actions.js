import { CUSTOMERS_UPDATE, CUSTOMER_DETAIL_UPDATE, TRANSFER_EXECUTED } from './actionNames';
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

export const executeTransfer = (values) => async (dispatch) => {
	console.log(values);
	try {
		const response = await ClearPayApi.executeTransfer(values);

		dispatch({
            type: TRANSFER_EXECUTED,
            payload: {},
        });
	} catch (error) {
		console.log(error)
	}
};
