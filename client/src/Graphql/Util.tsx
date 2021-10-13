import {ApolloClient, gql, HttpLink, InMemoryCache, useQuery} from "@apollo/client";
import {GET_ALL_EMPRESAS} from "./Queries";
import React from "react";
import {stringify} from "querystring";


export const Util = async () => {

    // const GRAPHQL_SERVER_URL = "http://localhost:3001/graphql";
    //
    // // const { loading, error, data } = useQuery(GET_ALL_EMPRESAS);
    //
    // const cache = new InMemoryCache();
    // const httpLink = new HttpLink({uri: GRAPHQL_SERVER_URL});
    // const client = new ApolloClient({cache, link: httpLink});

    // let nombreCompany;
    // const {loading, data, error} = await client.query({
    //     query: gql`
    //  query{
    //   getAllEmpresas{
    //     id,
    //     rutEmpresa,
    //     nombre
    //   }
    //  }
    //  `
    // })
    //
    //
    // if (error) {
    //     console.log("ERROR" + error.message)
    //     // Handle error case
    // } else if (!data) {
    //
    //     // console.log("HOLAAA: " + data.getAllEmpresas.nombre)
    // }
    //
    //   console.log("EMPRESA: " + data.getAllEmpresas.map((empresa:any) => empresa.nombre));
    //
    // return data.getAllEmpresas.map((empresa:any) => empresa.nombre);
}

