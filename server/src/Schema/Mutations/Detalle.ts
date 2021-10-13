import {GraphQLID, GraphQLObjectType, GraphQLString} from "graphql";
import {EmitidosType} from "../TypeDefs/Emitido";
import { MessageType } from "../TypeDefs/Messages";
import { Detalle } from "../../Entities/Detalle";
import {DetalleType} from "../TypeDefs/Detalle";

export const CREATE_DETALLE = {
    type: DetalleType,
    args: {
        dte_id: { type: GraphQLString },
        nombreitem: { type: GraphQLString },
        precio: { type: GraphQLString },
        cantidad: { type: GraphQLString },
        montoitem: { type: GraphQLString },
    },
    async resolve(parent: any, args: any) {
        const { dte_id, nombreitem, precio, cantidad, montoitem } = args;
        const detalleID = await Detalle.insert({ dte_id, nombreitem, precio, cantidad, montoitem});

        return args;
    },
};


