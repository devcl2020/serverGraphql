import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";


export const DetalleRecepType = new GraphQLObjectType({
    name: "DetalleRecep",
    fields: () => ({
        id: { type: GraphQLID },
        dte_id: { type: GraphQLString },
        nombreitem: { type: GraphQLString },
        cantidad: { type: GraphQLString },
        precio: { type: GraphQLString },
        montoitem: { type: GraphQLString },
    }),
});




