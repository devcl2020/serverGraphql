import {EmitidosType} from "../TypeDefs/Emitido";
import {GraphQLInt, GraphQLList, GraphQLString} from "graphql";
import {Emitidos} from "../../Entities/Emitidos";
import {Detalle} from "../../Entities/Detalle";
import {GraphQLDate} from "graphql-iso-date";
import {ClientesType} from "../TypeDefs/Clientes";
import {History} from "../../Entities/History";
import {Clientes} from "../../Entities/Clientes";

export const CREATE_CLIENTE = {
    type: ClientesType,
    args: {
        id: {type: GraphQLInt},
        codigointerno: {type: GraphQLString},
        rutcliente: {type: GraphQLString},
        razonsocial: {type: GraphQLString},
        giro: {type: GraphQLString},
        telefono: { type: GraphQLString },
        direccion: {type: GraphQLString},
        comuna: {type: GraphQLString},
        ciudad: {type: GraphQLString},
        contacto: { type: GraphQLString },
        formapago: {type: GraphQLString},

    }
    ,
    async resolve(parent: any, args: any) {
        const {
            codigointerno,
            rutcliente,
            razonsocial,
            giro,
            telefono,
            direccion,
            comuna,
            ciudad,
            contacto,
            formapago
        } = args;

        // console.log(args)


        const dteId = await Clientes.insert({
            codigointerno,
            rutcliente,
            razonsocial,
            giro,
            telefono,
            direccion,
            comuna,
            ciudad,
            contacto,
            formapago
        });

        return args;
    },

};