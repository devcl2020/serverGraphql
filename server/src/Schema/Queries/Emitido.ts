import {GraphQLInt, GraphQLList, GraphQLString} from "graphql";
import {Emitidos} from "../../Entities/Emitidos";
import {Detalle} from "../../Entities/Detalle"
import {EmitidosType} from "../TypeDefs/Emitido";
import {DetalleType} from "../TypeDefs/Detalle";
import {Users} from "../../Entities/Users";

export const GET_EMITIDO= {
    type: new GraphQLList(EmitidosType),
    args: {
        estado: { type: GraphQLInt },
        rutemisor: { type: GraphQLString }
    },
    resolve(parent: any, args: any) {
        const { estado, rutemisor } = args;

        if (args.estado) {
           return Emitidos.find({estado: estado});
        }

        if (args.rutemisor) {
            return Emitidos.find({rutemisor: rutemisor});
        }


    },
};


