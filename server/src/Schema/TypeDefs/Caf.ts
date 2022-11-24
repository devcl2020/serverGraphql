import {GraphQLList, GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt} from "graphql";

import {DetalleType} from "./Detalle";
import {Detalle} from "../../Entities/Detalle";
import {Emitidos} from "../../Entities/Emitidos";

export const CafType = new GraphQLObjectType({
    name: "Caf",
    fields: () => ({
        id: { type: GraphQLID },
        rutEmisor: { type: GraphQLString },
        tipoDoc: { type: GraphQLString },
        cafSTR: { type: GraphQLString },
        privateKey: { type: GraphQLString },
        publicKey: { type: GraphQLString },
        desde: { type: GraphQLString },
        hasta: { type: GraphQLString },
        actual: { type: GraphQLString },
        fechaAut: { type: GraphQLString },
        estado: { type: GraphQLString },

        RE: { type: GraphQLString },
        RS: { type: GraphQLString },
        TD: { type: GraphQLString },
        D: { type: GraphQLString },
        H: { type: GraphQLString },
        TA: { type: GraphQLString },
        M: { type: GraphQLString },
        E: { type: GraphQLString },
        IDK: { type: GraphQLString },
        FRMA: { type: GraphQLString }


    }),
});