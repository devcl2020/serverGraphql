import React, {useState} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import {Modal, ModalBody, ModalHeader, ModalFooter, Table} from 'reactstrap';
import {useQuery} from "@apollo/client";
import {GET_ALL_EMPRESAS, GET_ALL_EMITIDOS} from "../Graphql/Queries";

import { useHistory } from "react-router-dom";

const Emitidos = () => {

    const history = useHistory();

    // const { data2 } = useQuery(GET_ALL_RECIBIDOS);
    // console.log("DATA2: " + data2)

    const { loading, error, data } = useQuery(GET_ALL_EMITIDOS);
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    // console.log("HOLA2: " +  data.getAllRecibidos.map((dte:any) => dte.folio).toString())


    function handleOnClick(dte : any) {
        console.log("DATO: " + dte.id)

        let path = `/DetalleEmitidos`;


        history.push({
            pathname: path,
            search: '?update=true',  // query string
            state: {  // location state
                update: true,
                test: dte.tipodoc,
                id: dte.id
            },
        });

    }

    return (

        <div className ="Emitidos">
            <Table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Tipo Doc</th>
                    <th>Folio</th>
                    <th>Fecha Emision</th>
                    <th>trackid</th>
                    <th>Estado</th>
                </tr>
                </thead>

            <tbody>
            {data.getAllEmitidos.map((dte:any) =>(
                <tr onClick={() => handleOnClick(dte)}>
                    <td>{dte.id}</td>
                    <td>{dte.tipodoc}</td>
                    <td>{dte.folio}</td>
                    <td>{dte.fechaemision}</td>
                    <td>{dte.trackid}</td>
                    <td>{dte.estado}</td>
                </tr>
            ))}
            </tbody>
            </Table>
        </div>
    );
};

export default Emitidos;