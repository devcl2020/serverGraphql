import { GraphQLObjectType, GraphQLSchema } from "graphql";

import { GET_ALL_USERS } from "./Queries/User";
import {GET_ALL_EMITIDOS} from "./Queries/Emitidos";
import {GET_ALL_EMPRESAS} from "./Queries/Empresas";

import { CREATE_USER, DELETE_USER, UPDATE_PASSWORD } from "./Mutations/User";
import {CREATE_DTE, UPDATE_ESTADO} from "./Mutations/Emitido";
import {CREATE_DETALLE} from "./Mutations/Detalle";
import {GET_EMITIDO} from "./Queries/Emitido";

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    getAllUsers: GET_ALL_USERS,
    getAllEmpresas: GET_ALL_EMPRESAS,
    getAllEmitidos: GET_ALL_EMITIDOS,
    getEmitido: GET_EMITIDO
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createDte: CREATE_DTE,
    createDetalle: CREATE_DETALLE,
    createUser: CREATE_USER,
    deleteUser: DELETE_USER,
    updateEstado: UPDATE_ESTADO,
  },
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
