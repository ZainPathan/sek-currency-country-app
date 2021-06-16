import React from 'react';
import renderer from 'react-test-renderer';
import IconComponent from "./IconComponent";

describe('IconComponent tests', () => {

    const flagURL = 'https://restcountries.eu/data/bel.svg';

    it('snapshot test', () => {
        const tree = renderer
            .create(
                <IconComponent
                    src={flagURL}
                />
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
})