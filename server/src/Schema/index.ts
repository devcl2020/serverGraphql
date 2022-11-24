import { GraphQLObjectType, GraphQLSchema } from "graphql";


import { GET_ALL_USERS } from "./Queries/User";
import {GET_ALL_EMITIDOS} from "./Queries/Emitidos";
import {GET_ALL_EMPRESAS} from "./Queries/Empresas";

import { CREATE_USER, DELETE_USER, UPDATE_PASSWORD } from "./Mutations/User";
import {CREATE_DTE, UPDATE_ESTADO, UPDATE_ESTADO_TRACKID, UPDATE_ESTADOSII} from "./Mutations/Emitido";
import {CREATE_DETALLE} from "./Mutations/Detalle";
import {GET_EMITIDO, GET_EMITIDO_BY_ESTADO, GET_EMITIDO_BYID, GET_EMITIDO_BYTRACKID} from "./Queries/Emitido";
import {CREATE_CAF, UPDATE_FOLIOACTUAL} from "./Mutations/Caf";
import {GET_CAF, GET_CAF_ACTIVO, GET_ALL_CAF, GET_CAF_BYID} from "./Queries/Caf";
import {CREATE_XML} from "./Mutations/Xml";
import {GET_XML} from "./Queries/Xml";
import {CREATE_DISTR} from "./Mutations/ListaDistrSii";
import {GET_RECEP_SII} from "./Queries/ListaDistrSii";
import {CREATE_HISTORY} from "./Mutations/History";
import {GET_HISTORY} from "./Queries/History";
import {GET_RECIBIDO, GET_RECIBIDO_BYID} from "./Queries/Recibido";
import {CREATE_DTE_RECEP} from "./Mutations/Recibido";

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    getAllUsers: GET_ALL_USERS,
    getAllEmpresas: GET_ALL_EMPRESAS,
    getAllEmitidos: GET_ALL_EMITIDOS,
    getAllCaf: GET_ALL_CAF,
    getCaf: GET_CAF,
    getEmitido: GET_EMITIDO,
    getRecibido: GET_RECIBIDO,
    getRecibidoById: GET_RECIBIDO_BYID,
    getEmitidoByEstado: GET_EMITIDO_BY_ESTADO,
    getEmitidoById: GET_EMITIDO_BYID,
    getEmitidoByTrackId: GET_EMITIDO_BYTRACKID,
    getCafActivo: GET_CAF_ACTIVO,
    getCafByID: GET_CAF_BYID,
    getXml: GET_XML,
    getRecepSII: GET_RECEP_SII,
    getHistory: GET_HISTORY,

  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createDte: CREATE_DTE,
    createDteRecep: CREATE_DTE_RECEP,
    createCaf: CREATE_CAF,
    createDetalle: CREATE_DETALLE,
    createUser: CREATE_USER,
    deleteUser: DELETE_USER,
    updateEstado: UPDATE_ESTADO,
    updateEstadoTrackId: UPDATE_ESTADO_TRACKID,
    updateEstadoSii: UPDATE_ESTADOSII,
    updateFolio: UPDATE_FOLIOACTUAL,
    createXml: CREATE_XML,
    createDistrSII: CREATE_DISTR,
    createHistory: CREATE_HISTORY

  },
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
