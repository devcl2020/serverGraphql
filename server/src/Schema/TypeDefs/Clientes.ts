import {GraphQLList, GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt} from "graphql";

import {DetalleType} from "./Detalle";
import {Detalle} from "../../Entities/Detalle";
import {Emitidos} from "../../Entities/Emitidos";

export const ClientesType = new GraphQLObjectType({
    name: "Clientes",
    fields: () => ({
        id: { type: GraphQLID },
        codigointerno: { type: GraphQLString },
        rutcliente: { type: GraphQLString },
        razonsocial: { type: GraphQLString },
        giro: { type: GraphQLString },
        telefono: { type: GraphQLString },
        direccion: { type: GraphQLString },
        comuna: { type: GraphQLString },
        ciudad: { type: GraphQLString },
        contacto: { type: GraphQLString },
        formapago: { type: GraphQLString },



    }),
});