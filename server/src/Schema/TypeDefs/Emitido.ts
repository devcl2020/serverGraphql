import {GraphQLList, GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt} from "graphql";

import {DetalleType} from "./Detalle";
import {Detalle} from "../../Entities/Detalle";
import {Emitidos} from "../../Entities/Emitidos";

export const EmitidosType = new GraphQLObjectType({
    name: "Emitidos",
    fields: () => ({
        id: { type: GraphQLID },
        tipodoc: { type: GraphQLString },
        folio: { type: GraphQLString },
        fechaemision: { type: GraphQLString },
        indservicio: { type: GraphQLString },
        rutemisor: { type: GraphQLString },
        rutreceptor: { type: GraphQLString },

        montoneto: { type: GraphQLString },
        tasaiva: { type: GraphQLString },
        iva: { type: GraphQLString },
        montototal: { type: GraphQLString },

        trackid:{ type: GraphQLString },

        estado: { type: GraphQLInt },

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