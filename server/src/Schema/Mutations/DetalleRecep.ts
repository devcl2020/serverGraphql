import {GraphQLID, GraphQLObjectType, GraphQLString} from "graphql";
import {EmitidosType} from "../TypeDefs/Emitido";
import { MessageType } from "../TypeDefs/Messages";
import { DetalleRecep } from "../../Entities/DetalleRecep";
import {DetalleRecepType} from "../TypeDefs/DetalleRecep";

export const CREATE_DETALLE_RECEP = {
    type: DetalleRecepType,
    args: {
        dte_id: { type: GraphQLString },
        nombreitem: { type: GraphQLString },
        precio: { type: GraphQLString },
        cantidad: { type: GraphQLString },
        montoitem: { type: GraphQLString },
    },
    async resolve(parent: any, args: any) {
        const { dte_id, nombreitem, precio, cantidad, montoitem } = args;
        const detalleID = await DetalleRecep.insert({ dte_id, nombreitem, precio, cantidad, montoitem});

        return args;
    },
};


