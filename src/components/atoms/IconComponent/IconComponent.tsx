import React from 'react';
import Icon from "@material-ui/core/Icon";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    flag: {
        width: 80,
        height: 50
    }
});

interface IconComponentProps {
    src: string
}

const IconComponent: React.FC<IconComponentProps> = ({src}) => {
    const classes = useStyles();

    return (
        <Icon >
            <img alt='' className={classes.flag} src={src}/>
        </Icon>
    )
};

export default IconComponent;