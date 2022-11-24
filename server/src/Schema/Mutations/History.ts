import {EmitidosType} from "../TypeDefs/Emitido";
import {GraphQLInt, GraphQLList, GraphQLString} from "graphql";
import {Emitidos} from "../../Entities/Emitidos";
import {Detalle} from "../../Entities/Detalle";
import {GraphQLDate} from "graphql-iso-date";
import {HistoryType} from "../TypeDefs/History";
import {History} from "../../Entities/History";

export const CREATE_HISTORY = {
    type: HistoryType,
    args: {
        id: {type: GraphQLInt},
        rutemisor: {type: GraphQLString},
        tipodoc: {type: GraphQLString},
        folio: {type: GraphQLString},
        descripcion: {type: GraphQLString},
        timestamp: { type: GraphQLString },
    }
    ,
    async resolve(parent: any, args: any) {
        const {
            rutemisor,
            tipodoc,
            folio,
            descripcion,
            timestamp
        } = args;

        // console.log(args)


        const dteId = await History.insert({
            rutemisor,
            tipodoc,
            folio,
            descripcion,
            timestamp
        });

        return args;
    },

};