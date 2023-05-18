import { GraphQLList } from "graphql";
import {Emitidos} from "../../Entities/Emitidos";
import {EmitidosType} from "../TypeDefs/Emitido";

export const GET_ALL_EMITIDOS= {
    type: new GraphQLList(EmitidosType),
    resolve() {
        return Emitidos.find({
            order: {
                id: "ASC"
            },
        });
    },
};
