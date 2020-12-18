import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";

import Resources from '../views/list/index';
import NewResource from '../views/new/index';
import EditResource from '../views/edit/index';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Redirect exact from="/" to="/listagem" />
                <Route exact path="/listagem">
                    <Resources></Resources>
                </Route>
                <Route exact path="/not-found">
                    <div>
                        <h1>Página não encontrada :/</h1>
                    </div>
                </Route>
                <Route exact path="/cadastrar">
                    <NewResource></NewResource>
                </Route>
                <Route exact path="/editar/:id">
                    <EditResource></EditResource>
                </Route>
                <Redirect to="/not-found"/>
            </Switch>
        </Router>
    )
}

export default Routes;