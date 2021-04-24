import { CUSTOMERS_UPDATE } from './actionNames';

const INITIAL_STATE = {
	customers: [],
};

const reducers = (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case CUSTOMERS_UPDATE: {
			return {
				...state,
				customers: Object.values(payload),
			};
		}
		default:
			return state;
	}
};

export default reducers;
