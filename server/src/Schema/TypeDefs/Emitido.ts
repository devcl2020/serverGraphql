import {GraphQLList, GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt} from "graphql";

import {DetalleType} from "./Detalle";
import {Detalle} from "../../Entities/Detalle";
import {Emitidos} from "../../Entities/Emitidos";

import {
    GraphQLDate,
    GraphQLTime,
    GraphQLDateTime
} from 'graphql-iso-date';

export const EmitidosType = new GraphQLObjectType({
    name: "Emitidos",
    fields: () => ({
        id: { type: GraphQLID },
        tipodoc: { type: GraphQLString },
        folio: { type: GraphQLString },
        fechaemision: { type: GraphQLDate},
        indservicio: { type: GraphQLString },
        rutemisor: { type: GraphQLString },
        rutreceptor: { type: GraphQLString },
        nombrereceptor: { type: GraphQLString },

        montoneto: { type: GraphQLString },
        tasaiva: { type: GraphQLString },
        iva: { type: GraphQLString },
        montototal: { type: GraphQLString },

        trackid:{ type: GraphQLString },

        estado: { type: GraphQLString },

        idcaf: { type: GraphQLString },

        xml: { type: GraphQLString },

        estadosii: { type: GraphQLString },

        detalles: {
            type: new GraphQLList(DetalleType),
            resolve(dte) {
                return Detalle.find({dte_id: dte.id})
            }
          },
        anulado: { type: GraphQLString },
        // detalles: {
        //     type: new GraphQLList(DetalleType)
        // },
    }),
});