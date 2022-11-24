import {GraphQLList, GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt} from "graphql";

import {DetalleType} from "./Detalle";
import {Detalle} from "../../Entities/Detalle";
import {Emitidos} from "../../Entities/Emitidos";

export const ListDistrType = new GraphQLObjectType({
    name: "ListDistr",
    fields: () => ({
        id: { type: GraphQLID },
        rut: { type: GraphQLString },
        rznSocial: { type: GraphQLString },
        nroResolucion: { type: GraphQLString },
        mailIntercambio: { type: GraphQLString },
        url: { type: GraphQLString },

    }),
});