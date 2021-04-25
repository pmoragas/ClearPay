import axios from 'axios';

const CLEARPAY_API_URL = 'http://localhost:8080/api/';

class ClearPayApi {
	constructor() {
		this.api = axios.create({
			baseURL: CLEARPAY_API_URL,
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

	getCustomer = async (id) => {
		const response = await this.api.get(`customer/${id}`, {
			headers: this.getHeaders(),
		});

		return response.data;
	};

	getCustomerWallets = async (customerId) => {
		const response = await this.api.get(`customer/${customerId}/wallet`, {
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

    executeTransfer = async (values) => {
		const response = await this.api.post(`wallet/transfer`, {
			headers: this.getHeaders(),
			...values
		});

		return response.data;
	};

}

export default new ClearPayApi();
