import {GraphQLList, GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt} from "graphql";

import {DetalleType} from "./Detalle";
import {Detalle} from "../../Entities/Detalle";
import {Emitidos} from "../../Entities/Emitidos";

export const XmlType = new GraphQLObjectType({
    name: "Xml",
    fields: () => ({
        id: { type: GraphQLID },
        idEmitidos: { type: GraphQLInt },
        tipoDTE: { type: GraphQLString },
        folio: { type: GraphQLString },
        xml: { type: GraphQLString },
    }),
});