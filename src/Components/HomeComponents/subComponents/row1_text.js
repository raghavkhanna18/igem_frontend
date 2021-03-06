import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const ColorButton = withStyles((theme) => ({
    root: {
      color: "#FFFFFF",
      backgroundColor: "#FF6F90",
      '&:hover': {
        backgroundColor: "#FF6F90",
      },
    },
  }))(Button);

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

export default function Row1Text(props){

    const classes = useStyles();

    const navStyle = {
        color: 'white',
        textDecoration: 'none',
        background: ''
    };

    return(
        <div className={classes.root}>
            <ThemeProvider theme={theme}>
                <Typography variant={"h4"}>
                    Welcome to
                </Typography>
                <Typography variant={"h1"}>
                    SOAPLab
                </Typography>
                <Link style={navStyle} to='/designer'>
                    <ColorButton size="large" variant="contained">
                        Designer
                    </ColorButton>
                </Link>
            </ThemeProvider>
        </div>
    )
}