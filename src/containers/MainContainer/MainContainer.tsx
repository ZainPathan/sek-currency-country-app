import React, { Component } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import { withStyles, WithStyles } from '@material-ui/core';
import MainContainerStyles from './styles/MainContainer.style';

import { ReducerState } from '../../redux/modules';
import { actions as Countries } from '../../redux/modules/countries';
import { actions as Currencies } from '../../redux/modules/currencies';

import CountryDetailSection from '../../components/organisms/CountryDetailSection';
import InputTextButtonCombo from '../../components/atoms/InputTextButtonCombo';
import Loader from '../../components/molecules/Loader';

import { labels } from '../../core/constants';

interface MainContainerProps extends WithStyles<typeof MainContainerStyles> {
    searchCountries: Function,
    countriesList: any
    loadingState: string,
    getCurrencyRates: Function,
    currencyRatesLoadingState: string,
    currencyRatesMap: any
}

interface MainContainerState {
    searchCountryText: string,
    currencyAmountInSEK: number
}

class MainContainer extends Component<MainContainerProps, MainContainerState> {
    constructor(props) {
        super(props);

        this.state = {
            searchCountryText: '',
            currencyAmountInSEK: 0
        }
        this.onCountryEntered = this.onCountryEntered.bind(this);
        this.searchCountry = this.searchCountry.bind(this);
        this.onSEKAmountEntered = this.onSEKAmountEntered.bind(this);
        this.getCurrencyRates = this.getCurrencyRates.bind(this);
    }

    onCountryEntered(event) {
        this.setState({
            searchCountryText: event.target.value
        });
    }

    searchCountry() {
        const {
            searchCountries
        } = this.props;
        searchCountries(this.state.searchCountryText)
            .then(() => {
                console.log('Countries Searched');
            })
    }

    onSEKAmountEntered(event) {
        this.setState({
            currencyAmountInSEK: event.target.value
        });
    }

    getCurrencyRates() {
        const {
            countriesList,
            getCurrencyRates
        } = this.props;

        let currencyCodeSet = new Set();
        currencyCodeSet.add('SEK');

        const currenciesSet = countriesList.reduce((result, country) => {
            result.add(country.currencies[0]?.code);
            return result;
        }, currencyCodeSet);

        const currencyCodesString = Array.from(currenciesSet).join(',');
        getCurrencyRates(currencyCodesString);
    }

    render() {
        const {
            classes,
            loadingState,
            countriesList,
            currencyRatesMap,
            currencyRatesLoadingState
        } = this.props;

        const {
            currencyAmountInSEK
        } = this.state;

        let currMap = {};

        if(currencyRatesMap && currencyRatesLoadingState === 'LOADED') {
            currMap = Object.keys(currencyRatesMap).reduce((result, curr) => {
                result[curr] = currencyRatesMap[curr]/currencyRatesMap['SEK'];
                return result;
            }, {});
        }

        return (
            <div className={classes.mainContainer}>
                <Loader showLoader={loadingState === 'LOADING' || currencyRatesLoadingState === 'LOADING'} />
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <h2>{labels.header}</h2>
                    </Grid>
                    <Grid item xs={12}>
                        <InputTextButtonCombo
                            inputPlaceholder={labels.searchCountryPlaceholderText}
                            buttonLabel={labels.searchCountryButtonText}
                            onChange={this.onCountryEntered}
                            onClick={this.searchCountry}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <CountryDetailSection
                            countriesList={countriesList}
                            currMap={currMap}
                            currencyAmountInSEK={currencyAmountInSEK}
                            loadingState={loadingState}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <InputTextButtonCombo
                            inputPlaceholder={labels.amountInSEKPlaceholder}
                            buttonLabel={labels.getAmountInCurrenciesButtonText}
                            onChange={this.onSEKAmountEntered}
                            onClick={this.getCurrencyRates}
                            disabled={!currencyAmountInSEK || !countriesList || countriesList.length === 0}
                        />
                    </Grid>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = (state: ReducerState) => ({
    countriesList: state.countries.countriesList,
    loadingState: state.countries.loadingState,
    currencyRatesMap: state.currencies.currencyRatesMap,
    currencyRatesLoadingState: state.currencies.loadingState
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    searchCountries: Countries.searchCountries,
    getCurrencyRates: Currencies.getCurrencyRates
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(MainContainerStyles)(MainContainer));