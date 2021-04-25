import React from 'react';
import { render } from '@testing-library/react';
import Login from './index';

let mockUserSelector;
let mockState;
const mockHistory  = jest.fn();

jest.mock('react-redux', () => ({
	useSelector: () => mockUserSelector,
    useDispatch: () => {
		return jest.fn();
	},
}));


jest.mock('react-router-dom', () => {
	return {
		...jest.requireActual('react-router-dom'),
		useLocation: () => ({
			state: mockState,
		}),
		useHistory: () => {
			return {
				replace: mockHistory,
			};
		},
	};
});

describe('Login', () => {
	test('Redirect to customer if has user', () => {
        mockUserSelector = {
            user: { token: "dummyToken"}
        }
        mockState = null;

		render(<Login/>);

		expect(mockHistory).toHaveBeenCalledWith({pathname: "/customer"});
	});

    test('Redirect to visited page if has user', () => {
        mockUserSelector = {
            user: { token: "dummyToken"}
        }
        mockState = { from: "/customer/1"};

		render(<Login/>);

		expect(mockHistory).toHaveBeenCalledWith("/customer/1");
	});
});
