import {GraphQLList, GraphQLObjectType, GraphQLID, GraphQLString} from "graphql";

export const MenuPrincipalType = new GraphQLObjectType({
    name: "MenuPrincipal",
    fields: () => ({
        id: { type: GraphQLID },
        nombre: { type: GraphQLString },
        ruta: { type: GraphQLString },
        tag: { type: GraphQLString },
        screenappowner: { type: GraphQLString }

    }),
});