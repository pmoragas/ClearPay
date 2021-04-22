import axios from 'axios';

class ClearPayApi {
	constructor() {
		this.api = axios.create({
			baseURL: 'http://localhost:3030/api/',
			headers: {
				'Content-type': 'application/json',
			},
		});
	}

	getHeaders = () => {
		const user = JSON.parse(localStorage.getItem('user'));

		if (user && user.token) {
			return { Authorization: `Bearer ${user.token}` };
		}
		return {};
	};

	userSignin = async ({ email, password }) => {
		const response = await this.api.post('user/signin', {
			email,
			password,
		});
		return response.data;
	};

	getCustomers = async () => {
		const response = await this.api.get('customer', {
			headers: this.getHeaders(),
		});

		return response.data;
	};

	getWallets = async (customerId) => {
		const response = await this.api.get(`wallet/${customerId}/customer`, {
			headers: this.getHeaders(),
		});

		return response.data;
	};

    getWallet = async (walletId) => {
		const response = await this.api.get(`wallet/${walletId}`, {
			headers: this.getHeaders(),
		});

		return response.data;
	};

    getWallet = async (walletId) => {
		const response = await this.api.get(`wallet/${walletId}`, {
			headers: this.getHeaders(),
		});

		return response.data;
	};

    makePayment = async (originWalletId, destinationWalletId, amount) => {
		const response = await this.api.post(`wallet/${originWalletId}/payment`, {
			headers: this.getHeaders(),
		}, { destinationWalletId, amount });

		return response.data;
	};

}

export default new ClearPayApi();
