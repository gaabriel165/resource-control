import React from 'react';
import Header from '../list/components/Header/Header';
import Form from './components/Form/Form'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {},
}));

const NewResource = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Header nome="Cadastrar Recurso"></Header>
            <Form nome='' tipo='' url='cadastro'/>
        </div>
    )
}

export default (NewResource);