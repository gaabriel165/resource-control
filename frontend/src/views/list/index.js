import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header'
import DataTable from './components/Table/Table'
import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import axios from 'axios';

const styles = {
    root: {
        marginLeft: '50%',
        transform: 'translate(-50%, 0)',
    },
    addButton: {
        marginTop: '30px',
    },

};

const Resources = (props) => {

    const { classes } = props;

    const [elementos, setElementos] = useState(['']);

    const updateHandler = async () => {
        await axios.get('http://localhost:3030/listagem').then((res) => {
            setElementos(res.data);
        })
    }

    useEffect(() => {
        updateHandler();
    }, [])

    return (
        <div>
            <Header nome="Listagem de Recursos"></Header>
            <div className={classes.root}>
                <DataTable elements={elementos}></DataTable>
                <Link component={RouterLink} to='/cadastrar' underline='none'>
                    <Button className={classes.addButton} variant='contained' color='primary'>Adicionar</Button>
                </Link>
            </div>
        </div>
    )
}

export default withStyles(styles)(Resources);