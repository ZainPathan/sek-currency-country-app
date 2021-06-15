import React from 'react';
import { Button, TextField } from '@material-ui/core';
import useInputTextButtonComboStyles from './InputTextButtonCombo.style';

const InputTextButtonCombo = (props) => {
    const classes = useInputTextButtonComboStyles();

    return (
        <>
            <TextField
                id="outlined-basic"
                label={props.inputPlaceholder}
                variant="outlined"
                className={classes.inputField}
                onChange={props.onChange}
            />
            <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={props.onClick}
                disabled={props.disabled}
            >
                {props.buttonLabel}
            </Button>
        </>
    );
};

export default InputTextButtonCombo