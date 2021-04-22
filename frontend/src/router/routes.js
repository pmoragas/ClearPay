import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from 'pages/Login';
import App from 'pages/App';
import Customer from 'pages/Customer';
import CustomerDetail from 'pages/CustomerDetail';
import Error404 from 'pages/Error404';
import {
	HOME_PATH,
    LOGIN_PATH,
    CUSTOMERS_PATH,
    CUSTOMER_DETAIL_PATH
} from './paths';
import PrivateRoute from './PrivateRoute';

const Routes = () => {
	return (
		<Switch>
			<Redirect exact from={HOME_PATH} to={LOGIN_PATH} />
			<Route exact path={LOGIN_PATH}>
				<Login />
			</Route>
			<PrivateRoute exact path={CUSTOMERS_PATH}>
				<App>
					<Customer/>
				</App>
			</PrivateRoute>
			<PrivateRoute path={CUSTOMER_DETAIL_PATH}>
				<App>
					<CustomerDetail/>
				</App>
			</PrivateRoute>
			<Route path="*">
				<Error404/>
			</Route>
		</Switch>
	);
};

export default Routes;
