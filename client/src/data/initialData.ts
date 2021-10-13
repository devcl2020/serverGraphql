import { Detalle, Invoice } from './types'

export const initialProductLine: Detalle = {
  nombreitem: '',
  cantidad: '1',
  precio: '0',
  montoitem: '0'
}


export const initialInvoice: Invoice = {
  tipoDTE: "33",
  folio: "1003",
  // invoiceDateLabel: 'Invoice Date',
  fechaEmision: '',
  // invoiceDueDateLabel: 'Due Date',
  fechaVencimiento: '',
  indServicio: "1",

  rutEmisor: "77086484-4",
  nombreEmisor: "Tecnología Hélice",
  giroEmisor: "Tecnología",
  acteco: "12345",
  dirOrigen: "dirOrigen",
  comunaOrigen: "comunaOrigen",
  ciudadOrigen: "comunaOrigen",

  rutReceptor: '',
  nombreReceptor: '',
  giroReceptor: "",
  dirRecep: "",
  comunaRecep: "",
  ciudadRecep: "",

  montoIVA: "montoIVA",
  tasaIVA: "tasaIVA",
  total: "Total",

  descripcionTitle: "Descripción",

  cantidadTitle: "Cant.",
  precioTitle: "Precio",
  montoTitle: "Monto",

  detalles: [

    { ...initialProductLine },

  ],


  subtotal: "SubTotal",
  ivaLabel: "IVA",

  notesLabel: "notesLabel",
  notes: "notes",
  termLabel: "termLabel",
  term: "term"

}



// export const initialInvoice: Invoice = {
//   tipoDTE: 'INVOICE',
//   companyName: '',
//   name: '',
//   companyAddress: '',
//   companyAddress2: '',
//   companyCountry: 'United States',
//   billTo: 'Bill To:',
//   clientName: '',
//   clientAddress: '',
//   clientAddress2: '',
//   clientCountry: 'United States',
//   invoiceTitleLabel: 'Invoice#',
//   invoiceTitle: '',
//   invoiceDateLabel: 'Invoice Date',
//   invoiceDate: '',
//   invoiceDueDateLabel: 'Due Date',
//   invoiceDueDate: '',
//   productLineDescription: 'Item Description',
//   productLineQuantity: 'Qty',
//   productLineQuantityRate: 'Rate',
//   productLineQuantityAmount: 'Amount',
//   productLines: [
//     {
//       description: 'Brochure Design',
//       quantity: '2',
//       rate: '100.00',
//     },
//     { ...initialProductLine },
//     { ...initialProductLine },
//   ],
//   subTotalLabel: 'Sub Total',
//   taxLabel: 'Sale Tax (10%)',
//   totalLabel: 'TOTAL',
//   currency: '$',
//   notesLabel: 'Notes',
//   notes: 'It was great doing business with you.',
//   termLabel: 'Terms & Conditions',
//   term: 'Please make the payment by the due date.',
// }
