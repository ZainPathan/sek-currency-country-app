import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import CountryDetailSection from "./CountryDetailSection";

describe('CountryDetailsSection component tests', () => {
   const mockCountriesList = [
       {
           "name": "France",
           "capital": "Paris",
           "population": 66710000,
           "currencies": [
               {
                   "code": "EUR",
                   "name": "Euro",
                   "symbol": "€"
               }
           ],
           "flag": "https://restcountries.eu/data/fra.svg",
       },
       {
           "name": "French Polynesia",
           "capital": "Papeetē",
           "population": 271800,
           "currencies": [
               {
                   "code": "XPF",
                   "name": "CFP franc",
                   "symbol": "Fr"
               }
           ],
           "flag": "https://restcountries.eu/data/pyf.svg",
       }
   ];
    const currencyRatesMap = {
        "SEK": 10.097733,
        "EUR": 1,
        "XPF": 119.884226
    };
    const mockCurrencyAmountInSEK = 100;
    const loadingState = false;

    const mockCurrMap = Object.keys(currencyRatesMap).reduce((result, curr) => {
        result[curr] = currencyRatesMap[curr]/currencyRatesMap['SEK'];
        return result;
    }, {});

   it('snapshot test', () => {
       const tree = renderer
           .create(
                <CountryDetailSection
                    countriesList={mockCountriesList}
                    currMap={mockCurrMap}
                    currencyAmountInSEK={mockCurrencyAmountInSEK}
                    loadingState={loadingState}
                />
           )
           .toJSON();
       expect(tree).toMatchSnapshot();
   });

   it('renders with proper country name in list', () => {
       const testCountryText = 'France';
       const { getByText } = render(
           <CountryDetailSection
               countriesList={mockCountriesList}
               currMap={mockCurrMap}
               currencyAmountInSEK={mockCurrencyAmountInSEK}
               loadingState={loadingState}
           />
       );
       expect(getByText(testCountryText)).toBeTruthy();
   });

   it('renders with proper local currency amount', () => {
       const testLocalCurrencyAmount = '€ 9.90';
       const { getByText } = render(
           <CountryDetailSection
               countriesList={mockCountriesList}
               currMap={mockCurrMap}
               currencyAmountInSEK={mockCurrencyAmountInSEK}
               loadingState={loadingState}
           />
       );
       expect(getByText(testLocalCurrencyAmount)).toBeTruthy();
   });
});