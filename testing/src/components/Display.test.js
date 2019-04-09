import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Display from './Display';

describe('The Display Component', () => {

    test('Renders the display component', () => {
      render(<Display />);
    })

    it('Displays strikes and balls', () => {
        const display = render(<Display />);
        const strikes= display.getByTestId('strike');
        const balls = display.getByTestId('ball');
    
        expect(strikes).toHaveTextContent(/strike/i);
        expect(balls).toHaveTextContent(/ball/i);
      })
})