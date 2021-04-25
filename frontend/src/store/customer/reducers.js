import { CUSTOMERS_UPDATE, CUSTOMER_DETAIL_UPDATE, TRANSFER_EXECUTED } from './actionNames';

const INITIAL_STATE = {
	customers: [],
	customerDetail: {wallets: []},
	hasDataChanged: false
};

const reducers = (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case CUSTOMERS_UPDATE: {
			return {
				...state,
				customers: Object.values(payload),
				hasDataChanged: false
			};
		}
		case CUSTOMER_DETAIL_UPDATE: {
			return {
				...state,
				customerDetail: payload,
				hasDataChanged: false
			};
		}
		case TRANSFER_EXECUTED: {
			return {
				...state,
				hasDataChanged: true
			};
		}
		default:
			return state;
	}
};

export default reducers;
