import {GraphQLList, GraphQLString} from "graphql";
import { Users } from "../../Entities/Users";
import {Detallemenuusuario} from "../../Entities/Detallemenuusuario";
import {DetalleMenuUsuarioType} from "../TypeDefs/DetalleMenuUsuario";

export const GET_PERFIL_USUARIO = {
    type: new GraphQLList(DetalleMenuUsuarioType),
    args: {
        idusuario: {type: GraphQLString},
    },
    resolve(parent: any, args: any) {
        const {idusuario} = args;

        return Detallemenuusuario.find({
            idusuario: idusuario
        });


    },
};
