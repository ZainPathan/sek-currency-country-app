import { makeStyles } from '@material-ui/core/styles';

const useCountryDetailsSectionStyle = makeStyles({
    tableContainer: {
        margin: 12,
        width: 'inherit',
        border: '1px solid black'
    },
    table: {
        minWidth: 650,
    },
    tableHead: {
        '& .MuiTableCell-head': {
            fontWeight: 700,
        }
    },
    errorContent: {
        margin: 12,
        padding: 10,
        border: '1px solid black',
        color: 'red'
    }
});

export default useCountryDetailsSectionStyle;