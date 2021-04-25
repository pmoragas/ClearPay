import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import CustomerDetail from './index';
const { customer } = require('mock/customer');

let mockCustomerSelector;

jest.mock('react-redux', () => ({
	useSelector: () => mockCustomerSelector,
    useDispatch: () => {
		return jest.fn();
	},
    useParams: () => {
		return "1";
	},
}));

describe('Customer', () => {
	test('Render Customer Page', () => {
        const history = createMemoryHistory();
        mockCustomerSelector = {customerDetail:customer, hasDataChanged: false, errorMsg: undefined};

        render(
            <Router history={ history }>
                <CustomerDetail/>
            </Router>);

		expect(screen.getAllByText('Transfer').length).toEqual(3);
		expect(screen.getByText('Jan')).toBeInTheDocument();
		expect(screen.getByText('Stannard')).toBeInTheDocument();
		expect(screen.getByText('jstannard0@g.co')).toBeInTheDocument();
		expect(screen.getByText('1125€')).toBeInTheDocument();
	});

	test('snapshot is ok', () => {
        const history = createMemoryHistory();
        mockCustomerSelector = {customerDetail: customer, hasDataChanged: false, errorMsg: undefined};
		const { container } = render(
            <Router history={ history }>
                <CustomerDetail/>
            </Router>);

		expect(container).toMatchSnapshot();
	});
});
