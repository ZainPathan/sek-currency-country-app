import React from 'react';
import { Backdrop, CircularProgress } from '@material-ui/core';

import useLoaderStyles from './Loader.style';

interface LoaderProps {
    showLoader: boolean
}

const Loader: React.FC<LoaderProps> = ({showLoader}) => {
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