import { CUSTOMERS_UPDATE, CUSTOMER_DETAIL_UPDATE } from './actionNames';

const INITIAL_STATE = {
	customers: [],
	customerDetail: {wallets: []}
};

const reducers = (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case CUSTOMERS_UPDATE: {
			return {
				...state,
				customers: Object.values(payload),
			};
		}
		case CUSTOMER_DETAIL_UPDATE: {
			return {
				...state,
				customerDetail: payload,
			};
		}
		default:
			return state;
	}
};

export default reducers;
