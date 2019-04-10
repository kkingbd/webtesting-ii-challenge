import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Dashboard from './Dashboard';

describe('The Dashboard Component', ()=>{
    test('render the dashboard component', ()=>{
        render (<Dashboard/>);
    })

    interface('Renders the strike, ball, hit and foul', ()=>{
        const dashboard = render(<Dashboard/>);
        const strike    = dashboard.getByText(/strike/i);
        const ball      = dashboard.getByText(/ball/i);
        const hit       = dashboard.getByText(/hit/i);
        const foul      = dashboard.getByText(/foul/i);

        expect(strike).toHaveTextContent(/strike/i);
        expect(ball).toHaveTextContent(/ball/i);
        expect(hit).toHaveTextContent(/hit/i);
        expect(foul).toHaveTextContent(/foul/i);

    })
})
