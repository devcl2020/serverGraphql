import { CSSProperties } from 'react'

export interface Detalle {
  nombreitem: string
  cantidad: string
  precio: string
  montoitem: string
}

export interface Invoice {
  tipoDTE: string
  folio: string
  fechaEmision: string
  fechaVencimiento: string


  rutEmisor: string
  nombreEmisor: string
  giroEmisor: string
  acteco: string
  dirOrigen: string
  comunaOrigen: string
  ciudadOrigen: string

  indServicio: string

  rutReceptor: string
  nombreReceptor: string
  giroReceptor: string
  dirRecep: string
  comunaRecep: string
  ciudadRecep: string

  montoIVA: string
  tasaIVA: string
  total: string

  descripcionTitle: string
  cantidadTitle: string
  precioTitle: string
  montoTitle: string

  detalles: Detalle[]

  subtotal: string
  ivaLabel: string

  notesLabel: string
  notes: string
  termLabel: string
  term: string
}

export interface CSSClasses {
  [key: string]: CSSProperties
}
