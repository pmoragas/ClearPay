import { WALLETS_UPDATE } from './actionNames';
import ClearPayApi from 'services/clearPayApi';

export const getWallets = () => async (dispatch) => {
	try {
		const response = await ClearPayApi.getWallets();

		dispatch({
            type: WALLETS_UPDATE,
            payload: { ...response },
        });
	} catch (error) {
		console.log(error)
	}
};
