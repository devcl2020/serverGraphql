import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Overview from './pages/Overview';
import { ReportsThree, Documentos} from './pages/Documentos';
import InvoicePage from "./components/InvoicePage";
import Team from './pages/Team';
import React, { Component }  from 'react';
import {ApolloClient, ApolloProvider, InMemoryCache, useQuery} from "@apollo/client";
import {GET_ALL_EMPRESAS} from "./Graphql/Queries";
import Emitidos from "./components/Emitidos";
import DetalleEmitido from "./components/DetalleEmitido";
import Folios from "./components/Folios";


function App() {
    const client = new ApolloClient({
        uri: "http://localhost:3001/graphql",
        cache: new InMemoryCache(),
    });



    return (
        <ApolloProvider client={client}>

        <Router>
            <Sidebar/>
            <Switch>
                <Route path='/overview' exact component={Overview} />
                <Route path='/Documentos' exact component={Documentos} />
                <Route path='/Documentos/BoletaElectronica' exact component={InvoicePage} />
                <Route path='/Documentos/Emitidos' exact component={Emitidos} />
                <Route path='/folios' exact component={Folios} />
                <Route path='/team' exact component={Team} />
                <Route path='/DetalleEmitidos' exact component={DetalleEmitido} />
            </Switch>
        </Router>
        </ApolloProvider>
    );
}

export default App;