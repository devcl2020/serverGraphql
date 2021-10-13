import { gql } from "@apollo/client";


export const CREATE_DTE = gql`
  mutation createDte( $tipodoc: String!, 
                      $folio: String!,
                      $fechaemision: String!, 
                      $indservicio: String!, 
                      $rutemisor: String!, 
                      $rutreceptor: String!, 
                      $montoneto: String!,
                      $tasaiva: String!,
                      $iva: String!,
                      $montototal: String!,
                      $trackid: String!,
                      $estado: Int!,
                      $detalles: [DetalleInput]
                    ) 
    {
     createDte(tipodoc: $tipodoc, folio: $folio, fechaemision: $fechaemision, 
               indservicio: $indservicio, rutemisor: $rutemisor, rutreceptor: $rutreceptor, 
               montoneto: $montoneto, tasaiva: $tasaiva, iva: $iva, montototal: $montototal, 
               trackid:$trackid, estado: $estado, detalles: $detalles  ) {
      id
      tipodoc
      folio
      fechaemision
      indservicio
      rutemisor
      rutreceptor
      montoneto, 
      tasaiva, 
      iva, 
      montototal, 
      trackid,
      estado,
      detalles{
        dte_id
        nombreitem
        cantidad
        precio
        montoitem
      }
    }
  }
`;


