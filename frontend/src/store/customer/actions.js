import { CUSTOMERS_UPDATE, CUSTOMER_DETAIL_UPDATE } from './actionNames';
import ClearPayApi from 'services/clearPayApi';

export const getCustomers = () => async (dispatch) => {
	try {
		//const response = await ClearPayApi.getCustomers();
		const response = [{"id":1,"first_name":"Tasha","last_name":"Vanni","email":"tvanni0@goo.gl"},
		{"id":2,"first_name":"Kendrick","last_name":"Broadbury","email":"kbroadbury1@cnbc.com"},
		{"id":3,"first_name":"Ann-marie","last_name":"Elsay","email":"aelsay2@ezinearticles.com"},
		{"id":4,"first_name":"Babette","last_name":"De Hooge","email":"bdehooge3@admin.ch"},
		{"id":5,"first_name":"Carmel","last_name":"Quakley","email":"cquakley4@jalbum.net"},
		{"id":6,"first_name":"Shelagh","last_name":"Klaaasen","email":"sklaaasen5@sun.com"},
		{"id":7,"first_name":"Laurette","last_name":"Grix","email":"lgrix6@blog.com"},
		{"id":8,"first_name":"Hiram","last_name":"Stearnes","email":"hstearnes7@alexa.com"},
		{"id":9,"first_name":"Boot","last_name":"Quest","email":"bquest8@sciencedaily.com"},
		{"id":10,"first_name":"Delaney","last_name":"Lothlorien","email":"dlothlorien9@earthlink.net"},
		{"id":11,"first_name":"Del","last_name":"Dix","email":"ddixa@ted.com"},
		{"id":12,"first_name":"Jan","last_name":"Emanson","email":"jemansonb@themeforest.net"},
		{"id":13,"first_name":"Amaleta","last_name":"Bittleson","email":"abittlesonc@posterous.com"},
		{"id":14,"first_name":"Sheelah","last_name":"Hamor","email":"shamord@slate.com"},
		{"id":15,"first_name":"Bernie","last_name":"Tarpey","email":"btarpeye@eventbrite.com"},
		{"id":16,"first_name":"Ryan","last_name":"Kyffin","email":"rkyffinf@csmonitor.com"},
		{"id":17,"first_name":"Imogene","last_name":"Matityahu","email":"imatityahug@qq.com"},
		{"id":18,"first_name":"Konrad","last_name":"Buard","email":"kbuardh@yale.edu"},
		{"id":19,"first_name":"Carolann","last_name":"Karlsen","email":"ckarlseni@omniture.com"},
		{"id":20,"first_name":"Timmy","last_name":"Monks","email":"tmonksj@harvard.edu"}];

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
		const response = await ClearPayApi.getCustomer(id);

		dispatch({
            type: CUSTOMER_DETAIL_UPDATE,
            payload: { ...response },
        });
	} catch (error) {
		console.log(error)
	}
};
