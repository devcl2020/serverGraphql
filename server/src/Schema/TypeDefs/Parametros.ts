import {GraphQLList, GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt} from "graphql";

import {DetalleType} from "./Detalle";
import {Detalle} from "../../Entities/Detalle";
import {Emitidos} from "../../Entities/Emitidos";

export const ParametrosType = new GraphQLObjectType({
    name: "Parametros",
    fields: () => ({
        id: { type: GraphQLID },
        nombre: { type: GraphQLString },
        valor: { type: GraphQLString }
    }),
});