import React, { FC, useEffect, useState } from 'react'
import { PDFDownloadLink } from '@react-pdf/renderer'
import { Invoice } from '../data/types'
import InvoicePage from './InvoicePage'
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

//
// interface Props {
//   dataInvoice: Invoice
// }
//
// const Download: FC<Props> = ({ dataInvoice }) => {
//   const [show, setShow] = useState<boolean>(false)
//
//   useEffect(() => {
//     setShow(false)
//
//     const timeout = setTimeout(() => {
//       setShow(true)
//     }, 500)
//
//     return () => clearTimeout(timeout)
//   }, [dataInvoice])
//
//   const client = new ApolloClient({
//     uri: "http://localhost:3001/graphql",
//     cache: new InMemoryCache(),
//   });
//
//   return (
//
//     <div className={'download-pdf ' + (!show ? 'loading' : '')} title="Save PDF">
//       {show && (
//         <PDFDownloadLink
//           document={ <ApolloProvider client={client}><InvoicePage pdfMode={true} dataInvoice={dataInvoice} /></ApolloProvider>}
//           fileName={`${dataInvoice.invoiceTitle ? dataInvoice.invoiceTitle.toLowerCase() : 'invoice'}.pdf`}
//           aria-label="Save PDF"
//         ></PDFDownloadLink>
//       )}
//     </div>
//
//   )
// }

// export default Download
