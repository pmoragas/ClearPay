import { CUSTOMERS_UPDATE, CUSTOMER_DETAIL_UPDATE } from './actionNames';
import ClearPayApi from 'services/clearPayApi';

export const getCustomers = () => async (dispatch) => {
	try {
		const response = await ClearPayApi.getCustomers();

		dispatch({
            type: CUSTOMERS_UPDATE,
            payload: { ...response },
        });
	} catch (error) {
		console.log(error)
	}
};

export const getCustomer = (id) => async (dispatch) => {
	try {
		const response = await ClearPayApi.getCustomer(id);

		dispatch({
            type: CUSTOMER_DETAIL_UPDATE,
            payload: { ...response },
        });
	} catch (error) {
		console.log(error)
	}
};
