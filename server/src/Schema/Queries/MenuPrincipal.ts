import { GraphQLList } from "graphql";
import {Menuprincipal} from "../../Entities/Menuprincipal";
import {MenuPrincipalType} from "../TypeDefs/MenuPrincipal";

    export const GET_ALL_MENUPPAL= {
    type: new GraphQLList(MenuPrincipalType),
    resolve() {
        return Menuprincipal.find();
    },
};
