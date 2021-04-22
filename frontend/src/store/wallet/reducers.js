import { WALLETS_UPDATE } from './actionNames';

const INITIAL_STATE = {
	customers: [],
};

const reducers = (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case WALLETS_UPDATE: {
			return {
				...state,
				characters: Object.values(payload),
			};
		}
		default:
			return state;
	}
};

export default reducers;
