import { GraphQLList } from "graphql";
import { EmpresaType } from "../TypeDefs/Empresa";
import { Empresas } from "../../Entities/Empresas";

export const GET_ALL_EMPRESAS = {
    type: new GraphQLList(EmpresaType),
    resolve() {
        return Empresas.find();
    },
};
