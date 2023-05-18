import {GraphQLList, GraphQLString} from "graphql";
import {ClientesType} from "../TypeDefs/Clientes";
import {Clientes} from "../../Entities/Clientes";


export const GET_CLIENTE = {
    type: new GraphQLList(ClientesType),
    args: {
        rutcliente: {type: GraphQLString},
    },
    resolve(parent: any, args: any) {
        const {rutcliente} = args;

        return Clientes.find({
            rutcliente: rutcliente
        });
    },
}


