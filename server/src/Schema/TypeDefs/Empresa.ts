import {GraphQLObjectType, GraphQLID, GraphQLString} from "graphql";
import {Column} from "typeorm";

export const EmpresaType = new GraphQLObjectType({
    name: "Empresa",
    fields: () => ({
        id: {type: GraphQLID},
        rutEmpresa: {type: GraphQLString},
        nombre: {type: GraphQLString},
        direccion: {type: GraphQLString},
        acteco: {type: GraphQLString},
        giro: {type: GraphQLString},
        comuna: {type: GraphQLString},
        ciudad: {type: GraphQLString},
        dirDespacho: {type: GraphQLString},


    }),
});