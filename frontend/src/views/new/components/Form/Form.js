import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';
import { useMutation, useQuery, useQueryCache } from 'react-query';
import axios from 'axios';
import {
    FormGroup,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Button,
    Link,
    Divider
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(3)
    },
    text: {
        marginTop: '10px',
        fontSize: '26px',
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3)
    },
    nome: {
        width: '30%',
    },
    select: {
        border: '1px solid #ced4da',
        borderRadius: 4,
        fontSize: 16,
    },
    formControl: {
        maxWidth: 120
    },
    divider: {
        margin: theme.spacing(3)
    },
    spacingLeft: {
        marginLeft: theme.spacing(3)
    }
}));

const Form = (props) => {

    const classes = useStyles();

    const [type, setType] = useState(props.tipo);
    const [name, setName] = useState(props.nome);

    const typeHandleChange = (event) => {
        setType(event.target.value);
    }

    const nameHandleChange = (event) => {
        setName(event.target.value);
    }

    const [addElement] = useMutation(() => axios.post(`http://localhost:3030/cadastro`, { nome: name, tipo: type }), {
        onSuccess: () => {
            window.location.reload();
        }
    });

    const [updateElement] = useMutation(() => axios.put(`http://localhost:3030/editar/${props.url}`, { nome: name, tipo: type }), {
        onSuccess: () => {
            window.location.reload();
        }
    });

    const buttonConfirm = () => {
        if(props.url == 'cadastro'){
            return(
                <Button className={classes.spacingLeft} onClick={() => { addElement() }} variant='contained' color='primary'>Confirmar</Button>
            )
        }else{
            return(
                <Button className={classes.spacingLeft} onClick={() => { updateElement() }} variant='contained' color='primary'>Confirmar</Button>
            )
        }
    }

    return (
        <div>
            <FormGroup className={classes.root}>
                <p className={classes.text}>Digite o nome</p>
                <TextField value={name} onChange={nameHandleChange} className={classes.nome} id='outlined-basic' label='Nome' variant='outlined' />
                <p className={classes.text}>Selecione o tipo</p>
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="demo-simple-select-outlined-label">Tipo</InputLabel>
                    <Select
                        value={type}
                        onChange={typeHandleChange}
                        className={classes.select}
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        label='Tipo'>
                        <MenuItem value={'AWS'}>AWS</MenuItem>
                        <MenuItem value={'API'}>API</MenuItem>
                        <MenuItem value={'HOST'}>Host</MenuItem>
                    </Select>
                </FormControl>
            </FormGroup>
            <Divider className={classes.divider} style={{ marginTop: '30px' }} />
            <div>
                <Link component={RouterLink} to='/listagem' underline='none'>
                    {buttonConfirm()}
                </Link>
                <Link component={RouterLink} to='/listagem' underline='none'>
                    <Button className={classes.spacingLeft} variant='contained' color='secondary'>Voltar</Button>
                </Link>
            </div>
        </div>
    );
}

export default (Form);