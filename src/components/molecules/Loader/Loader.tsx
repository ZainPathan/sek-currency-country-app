import React from 'react';
import { Backdrop, CircularProgress } from '@material-ui/core';

import useLoaderStyles from './Loader.style';

const Loader = ({showLoader}) => {
    const classes = useLoaderStyles();

    return (
        <div>
            <Backdrop
                className={classes.backdrop}
                open={showLoader}
            >
                <CircularProgress color="inherit"/>
            </Backdrop>
        </div>
    );
};

export default Loader;