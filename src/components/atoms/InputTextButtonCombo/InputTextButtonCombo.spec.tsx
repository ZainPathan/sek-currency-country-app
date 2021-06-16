import React from 'react';
import renderer from 'react-test-renderer';
import InputTextButtonCombo from './InputTextButtonCombo';
import { labels } from '../../../core/constants';
import { fireEvent, render } from '@testing-library/react';

describe('InputTextButtonCombo tests', () => {

    const inputPlaceholder = labels.searchCountryPlaceholderText;
    const buttonLabel = labels.searchCountryButtonText;
    const onChange = jest.fn();
    const onClick = jest.fn();

    it('renders properly', () => {
        const tree = renderer
            .create(
                <InputTextButtonCombo
                    inputPlaceholder={inputPlaceholder}
                    buttonLabel={buttonLabel}
                    onChange={onChange}
                    onClick={onClick}
                />
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders with input text placeholder', () => {
        const inputPlaceholderText = 'Test Input Placeholder';
        const { getAllByText } = render(
            <InputTextButtonCombo
                inputPlaceholder={inputPlaceholderText}
                buttonLabel={buttonLabel}
                onChange={onChange}
                onClick={onClick}
            />
        );
        expect(getAllByText(inputPlaceholderText)).toBeTruthy();
    });

    it('renders and button click event handler is called', () => {
        const { getByRole } = render(
            <InputTextButtonCombo
                inputPlaceholder={inputPlaceholder}
                buttonLabel={buttonLabel}
                onChange={onChange}
                onClick={onClick}
            />
        );
        fireEvent.click(getByRole('button'));
        expect(onClick).toHaveBeenCalled();
    });
});