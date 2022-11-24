import {GraphQLID, GraphQLList, GraphQLObjectType, GraphQLString} from "graphql";
import {GraphQLDate, GraphQLDateTime} from "graphql-iso-date";


export const HistoryType = new GraphQLObjectType({
    name: "History",
    fields: () => ({
        id: { type: GraphQLID },
        rutemisor: { type: GraphQLString },
        tipodoc: { type: GraphQLString },
        folio: { type: GraphQLString},
        descripcion: { type: GraphQLString },
        timestamp: { type: GraphQLDateTime },
    }),
});