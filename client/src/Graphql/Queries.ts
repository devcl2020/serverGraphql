import {ApolloClient, gql, InMemoryCache, useQuery} from "@apollo/client";

export const GET_ALL_EMPRESAS=  gql`
query{
      getAllEmpresas{  
        id,
        rutEmpresa,
        nombre, 
        direccion, 
        acteco, 
        giro, 
        comuna, 
        ciudad, 
        dirDespacho
       
      }
     }
`;

export const GET_ALL_EMITIDOS=  gql`
query{
      getAllEmitidos{  
        id,
        tipodoc,
        folio,
        fechaemision, 
        trackid,
        estado, 
        rutreceptor
      }
     }
`;