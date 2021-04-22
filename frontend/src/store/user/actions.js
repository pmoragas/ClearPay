import { USER_UPDATE } from './actionNames';
import ClearPayApi from 'services/clearPayApi';

export const login = (values) => async (dispatch) => {
	try {
		const user = await ClearPayApi.userSignin(values);

		if (user.token) {
			localStorage.setItem('user', JSON.stringify(user));

			dispatch({
				type: USER_UPDATE,
				payload: { user, error: false },
			});
		}
	} catch (_error) {
		dispatch({
			type: USER_UPDATE,
			payload: { user: null, error: true },
		});
	}
};

export const logout = () => async (dispatch) => {
	localStorage.removeItem('user');
	dispatch({
		type: USER_UPDATE,
		payload: { user: null, error: false, loggedOut: true },
	});
	window.location.reload();
};
