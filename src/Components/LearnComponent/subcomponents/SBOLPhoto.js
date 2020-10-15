import React, {useState, useEffect} from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root:{
        textAlign: 'left',
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    bottomLeft: {
        position: 'absolute',
        bottom: '10px',
        left:'10px',
    }
  }));

const WhiteTextTypography = withStyles({
    root: {
        color: "#FFFFFF"
    }
})(Typography);

export default function SBOLPhoto(props){

    const classes = useStyles();

    return(
        <div className={classes.root}>
            <div className={Container}>
                <img src={process.env.PUBLIC_URL + 'sbol_logo.png'} width="100%" alt="help robot" />
            </div>
        </div>
    )
}