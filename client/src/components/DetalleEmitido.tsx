import React, {useState} from 'react';
import { useLocation } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'
import {Modal, ModalBody, ModalHeader, ModalFooter, Table} from 'reactstrap';

const Emitidos = () => {

    const location = useLocation();

    // console.log((location.state as any).test)  // for location state
    // console.log(location.search)  // for query strings;

    return (

        <div className ="Emitidos">
            <Table>
                <thead>
                <tr>
                    <th>{(location.state as any).test}</th>
                    <th>{(location.state as any).id}</th>


                </tr>
                </thead>

                <tbody>
                {

                }
                </tbody>
            </Table>
        </div>
    );
};

export default Emitidos;