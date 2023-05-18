import {GraphQLList, GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt} from "graphql";

export const DetalleMenuUsuarioType = new GraphQLObjectType({
    name: "DetalleMenuUsuario",
    fields: () => ({
        idmenu: { type: GraphQLID },
        idusuario: { type: GraphQLString },
        rutamenu: { type: GraphQLString },
        nombremenu: { type: GraphQLString },
        tag: { type: GraphQLString },
        screenappowner: { type: GraphQLString },

    }),
});