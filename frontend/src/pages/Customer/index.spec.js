import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import Customer from './index';
const { customers } = require('mock/customers');

let mockCustomerSelector;

jest.mock('react-redux', () => ({
	useSelector: () => mockCustomerSelector,
    useDispatch: () => {
		return jest.fn();
	},
}));

describe('Customer', () => {
	test('Render Customer Page', () => {
        const history = createMemoryHistory();
        mockCustomerSelector = { customers };
		render(
            <Router history={ history }>
                <Customer/>
            </Router>);

		expect(screen.getAllByText('Open Customer').length).toEqual(20);
		expect(screen.getByText('Adam')).toBeInTheDocument();
		expect(screen.getByText('Bank')).toBeInTheDocument();
		expect(screen.getByText('ibrockiee@mediafire.com')).toBeInTheDocument();
		expect(screen.getByText('20')).toBeInTheDocument();
	});

	test('snapshot is ok', () => {
        const history = createMemoryHistory();
        mockCustomerSelector = {customers};

        const { container } = render(
            <Router history={ history }>
                <Customer/>
            </Router>);

		expect(container).toMatchSnapshot();
	});
});
