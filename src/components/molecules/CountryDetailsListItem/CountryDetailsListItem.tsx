import React from 'react';
import TableCell from "@material-ui/core/TableCell";
import Icon from "@material-ui/core/Icon";
import TableRow from "@material-ui/core/TableRow";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    flag: {
        width: 80,
        height: 50
    }
});

export default function CountryDetailsListItem({country}) {
    const classes = useStyles();

    return (
        <>
        </>
        /*<TableRow key={country.name}>
            <TableCell>
                <Icon >
                    <img className={classes.flag} src={country.flag}/>
                </Icon>
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
                    (getAmountInCurrency(
                        props.currMap,
                        country?.currencies[0]?.code,
                        country?.currencies[0]?.symbol,
                        props.currencyAmountInSEK))
                    : null
                }</TableCell>
        </TableRow>*/
    )
};