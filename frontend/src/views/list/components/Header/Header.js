import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
    header: {
        color: 'red',
        backgroundColor: 'rgb(59, 120, 253)',
        height: '130px',
    },
    headerText: {
        textAlign: 'center',
        fontSize: '35px',
        fontWeight: 'bold',
        color: 'white',
        verticalAlign: 'middle',
        lineHeight: '130px',
        fontFamily: 'Arial'
    }
}

const Header = (props) => {
    const { classes } = props;
    return(
        <header className={classes.header}>
            <p className={classes.headerText}>{props.nome}</p>
        </header>
    )
}

export default withStyles(styles)(Header);