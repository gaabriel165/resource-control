import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Header from '../list/components/Header/Header';
import Form from '../new/components/Form/Form';

const EditResource = () => {
    const location = useLocation();

    const { id } = useParams();
    
    return(
        <div>
            <Header nome='Editar Recurso'></Header>
            <Form nome={location.state.nome} tipo={location.state.tipo} url={`${id}`}/>
        </div>
    )
}

export default (EditResource);