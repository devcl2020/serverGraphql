import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";


export const DetalleType = new GraphQLObjectType({
    name: "Detalle",
    fields: () => ({
        id: { type: GraphQLID },
        dte_id: { type: GraphQLString },
        coditem: { type: GraphQLString },
        nombreitem: { type: GraphQLString },
        cantidad: { type: GraphQLString },
        precio: { type: GraphQLString },
        montoitem: { type: GraphQLString },
    }),
});




