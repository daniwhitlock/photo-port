import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';


afterEach(cleanup); // insures we don't have leftover memory data that could give us false results

describe('About component', () => {
     // first test
     it('renders', () => { //test and it can be used interchangeably
         render(<About />);
     });

     // second test
     it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
     });
});