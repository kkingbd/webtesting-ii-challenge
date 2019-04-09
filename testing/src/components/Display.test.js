import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';
import { shallow } from 'enzyme';
import Display from './Display';

describe('The Display Component', () => {

    test('Renders the display component', () => {
      render(<Display />);
    })
  
    it('shallow rendering', () => {
      shallow(<Display />);
    })
    it('Displays strikes and balls', () => {
        const display = render(<Display />);
        const strikes] = display.getByTestId('strikes');
        const balls = display.getByTestId('balls');
    
        expect(strikes).toHaveTextContent(/strikes:/i);
        expect(balls).toHaveTextContent(/balls:/i);
      })
})