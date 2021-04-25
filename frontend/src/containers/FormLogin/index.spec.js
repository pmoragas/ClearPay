import React from 'react';
import { render, screen } from '@testing-library/react';
import FormLogin from './index';

describe('FormLogin', () => {
	test('Render FormLogin', () => {
		render(<FormLogin onSubmitForm={() => console.log('submitted')}/>);

		expect(screen.getByLabelText('Email')).toBeInTheDocument();
		expect(screen.getByLabelText('Password')).toBeInTheDocument();
		expect(screen.getByText('Submit')).toBeInTheDocument();
	});

	test('snapshot is ok', () => {
		const { container } = render(<FormLogin onSubmitForm={() => console.log('submitted')}/>);

		expect(container).toMatchSnapshot();
	});
});
