import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './index';

describe('Button', () => {
	test('Render Card Text', () => {
		render(<Card wallet={{id: "abcdefgh", amount: 1000}} onSubmit={() => console.log('submitted')}/>);

		expect(screen.getByText('1000')).toBeInTheDocument();
		expect(screen.getByText('Submit')).toBeInTheDocument();
		expect(screen.getByDisplayValue('abcdefgh')).toBeInTheDocument();
	});

	test('snapshot is ok', () => {
		const { container } = render(<Card wallet={{id: "abcdefgh", amount: 1000}}/>);

		expect(container).toMatchSnapshot();
	});
});
