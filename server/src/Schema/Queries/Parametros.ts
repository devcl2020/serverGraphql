import {GraphQLList, GraphQLString} from "graphql";
import {ParametrosType} from "../TypeDefs/Parametros";
import {Parametros} from "../../Entities/Parametros";

export const GET_ALL_PARAMETROS= {
    type: new GraphQLList(ParametrosType),
    resolve() {
        return Parametros.find();
    },
};