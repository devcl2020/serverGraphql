import {GraphQLList, GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt} from "graphql";

import {DetalleType} from "./Detalle";
import {Detalle} from "../../Entities/Detalle";
import {Recibidos} from "../../Entities/Recibidos";

import {
    GraphQLDate,
    GraphQLTime,
    GraphQLDateTime
} from 'graphql-iso-date';

export const RecibidosType = new GraphQLObjectType({
    name: "Recibidos",
    fields: () => ({
        id: { type: GraphQLID },
        tipodoc: { type: GraphQLString },
        folio: { type: GraphQLString },
        fechaemision: { type: GraphQLDate},
        indservicio: { type: GraphQLString },
        rutemisor: { type: GraphQLString },
        rutreceptor: { type: GraphQLString },
        nombreemisor: { type: GraphQLString },

        montoneto: { type: GraphQLString },
        tasaiva: { type: GraphQLString },
        iva: { type: GraphQLString },
        montototal: { type: GraphQLString },

        estado: { type: GraphQLString },

        xml: { type: GraphQLString },

        estadosii: { type: GraphQLString },

        detalles: {
            type: new GraphQLList(DetalleType),
            resolve(dte) {
                return Detalle.find({dte_id: dte.id})
            }
        },
        // detalles: {
        //     type: new GraphQLList(DetalleType)
        // },
    }),
});