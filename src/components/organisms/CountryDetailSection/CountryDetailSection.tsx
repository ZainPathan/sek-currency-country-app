import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconComponent from '../../atoms/IconComponent';

import useCountryDetailsSectionStyle from './CountryDetailsSection.style';

import { labels } from '../../../core/constants';
import { GetAmountInCurrency } from '../../../core/utils';

interface CountryDetailSectionProps {
    countriesList: any,
    currMap: object,
    currencyAmountInSEK: number,
    loadingState: string
}

const CountryDetailSection: React.FC<CountryDetailSectionProps> = (props) => {
    const classes = useCountryDetailsSectionStyle();

    return (
        <>
            {props.countriesList && props.countriesList.length > 0 ?
                (
                    <TableContainer className={classes.tableContainer} component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead className={classes.tableHead}>
                                <TableRow>
                                    {labels.countryDetailsHeaders.map((detailHeader, index) => {
                                        return (
                                            <TableCell
                                                align={index > 1 ? 'right' : 'inherit'}
                                                key={detailHeader}
                                            >
                                                {detailHeader}
                                            </TableCell>);
                                    })}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {props.countriesList.map((country) => (
                                    <TableRow key={country.name}>
                                        <TableCell>
                                            <IconComponent src={country.flag}/>
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            {country.name}
                                        </TableCell>
                                        <TableCell align="right">{country.capital}</TableCell>
                                        <TableCell align="right">{country.population}</TableCell>
                                        <TableCell align="right">{country?.currencies[0]?.name}</TableCell>
                                        <TableCell align="right">
                                            {props.currMap && Object.keys(props.currMap).length > 0 &&
                                                props.currencyAmountInSEK ?
                                                    (GetAmountInCurrency(
                                                        props.currMap,
                                                        country?.currencies[0]?.code,
                                                        country?.currencies[0]?.symbol,
                                                        props.currencyAmountInSEK))
                                                    : null
                                            }</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                )
                : ((props.loadingState === 'ERROR') ?
                    (
                        <div className={classes.errorContent}>
                            {labels.searchCountryError}
                        </div>
                    )
                    : null)
            }
        </>
    );
};

export default CountryDetailSection;