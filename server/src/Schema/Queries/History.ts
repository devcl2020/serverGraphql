import {GraphQLList, GraphQLString} from "graphql";
import {ListDistrType} from "../TypeDefs/ListDistr";
import {ListDistrSii} from "../../Entities/ListDistrSii";
import {History} from "../../Entities/History";
import {HistoryType} from "../TypeDefs/History";


export const GET_HISTORY = {
    type: new GraphQLList(HistoryType),
    args: {
        rutemisor: {type: GraphQLString},
        tipodoc: {type: GraphQLString},
        folio: {type: GraphQLString},
    },
        resolve(parent: any, args: any) {
            const {rutemisor, tipodoc, folio} = args;

            return History.find({
                rutemisor: rutemisor,
                tipodoc: tipodoc,
                folio: folio
            });
        },
    }


