import {GraphQLList, GraphQLString} from "graphql";
import {CafType} from "../TypeDefs/Caf";
import {Caf} from "../../Entities/Caf";
import {ListDistrSii} from "../../Entities/ListDistrSii";
import {ListDistrType} from "../TypeDefs/ListDistr";


export const GET_RECEP_SII = {
    type: new GraphQLList(ListDistrType),
    args: {
        rut: {type: GraphQLString}
    },
    resolve(parent: any, args: any) {
        const {rut} = args;

        return ListDistrSii.find({
            rut: rut
        });


    },
};