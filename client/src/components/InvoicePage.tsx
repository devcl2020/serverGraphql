import React, {FC, useState, useEffect} from 'react'
import {Invoice, Detalle} from '../data/types'
import {initialInvoice, initialProductLine} from '../data/initialData'
import EditableInput from './EditableInput'
import EditableSelect from './EditableSelect'
import EditableTextarea from './EditableTextarea'
import EditableCalendarInput from './EditableCalendarInput'
import countryList from '../data/countryList'
import Document from './Document'
import Page from './Page'
import View from './View'
import Text from './Text'
import {Font} from '@react-pdf/renderer'
// import Download from './DownloadPDF'
import format from 'date-fns/format'
import '../scss/_app.scss';
import '../scss/_color.scss';
import '../scss/_icons.scss';
import '../scss/_layout.scss';
import '../scss/_spacing.scss';
import '../scss/_text.scss';
import '../scss/_typography.scss';
import {gql, HttpLink, useLazyQuery, useQuery} from "@apollo/client";

import {Util} from "../Graphql/Util";


import {CREATE_DTE} from "../Graphql/Mutation";
import {useMutation} from "@apollo/client";
import {GET_ALL_EMPRESAS} from "../Graphql/Queries";


Font.register({
    family: 'Nunito',
    fonts: [
        {src: 'https://fonts.gstatic.com/s/nunito/v12/XRXV3I6Li01BKofINeaE.ttf'},
        {src: 'https://fonts.gstatic.com/s/nunito/v12/XRXW3I6Li01BKofA6sKUYevN.ttf', fontWeight: 600},
    ],
})

interface Props {
    dataInvoice?: Invoice
    pdfMode?: boolean
}

const InvoicePage: ({
                        dataInvoice,
                        pdfMode
                    }: { dataInvoice: any; pdfMode: any }) => (string | Invoice | JSX.Element) = ({
                                                                                                      dataInvoice,
                                                                                                      pdfMode
                                                                                                  }) => {

    const [subTotal, setSubTotal] = useState<number>()
    const [saleTax, setSaleTax] = useState<number>()
    const dateFormat = 'MMM dd, yyyy'

    const [invoice, setInvoice] = useState<Invoice>(dataInvoice ? {...dataInvoice} : {...initialInvoice})


    let today = new Date().toLocaleDateString()
    const invoiceDate = today;
    var todayDate = new Date().toISOString().slice(0, 10);

    invoice.fechaEmision = todayDate


    const invoiceDueDate =
        invoice.fechaVencimiento !== ''
            ? new Date(invoice.fechaVencimiento)
            : new Date(invoiceDate.valueOf())

    // Pass mutation to useMutation
    const [createDte] = useMutation(CREATE_DTE);

    if (invoice.fechaVencimiento === '') {
        invoiceDueDate.setDate(invoiceDueDate.getDate() + 30)

    }

    const handleChange = (name: keyof Invoice, value: string) => {
        if (name !== 'detalles') {
            const newInvoice = {...invoice}
            // console.log("NAME: " + name)
            newInvoice[name] = value
            setInvoice(newInvoice)
        }
    }

    const handleProductLineChange = (index: number, nombreitem: keyof Detalle, value: string) => {
        const detalles = invoice.detalles.map((productLine, i) => {
            if (i === index) {
                const newProductLine = {...productLine}

                if (nombreitem === 'nombreitem') {
                    newProductLine[nombreitem] = value
                } else {
                    if (
                        value[value.length - 1] === '.' ||
                        (value[value.length - 1] === '0' && value.includes('.'))
                    ) {
                        newProductLine[nombreitem] = value
                    } else {
                        const n = parseFloat(value)
                        newProductLine[nombreitem] = (n ? n : 0).toString()
                    }
                }

                return newProductLine
            }

            return {...productLine}
        })

        setInvoice({...invoice, detalles})
    }

    const handleRemove = (i: number) => {
        const detalles = invoice.detalles.filter((detalle, index) => index !== i)

        setInvoice({...invoice, detalles})
    }

    const handleAdd = () => {
        const detalles = [...invoice.detalles, {...initialProductLine}]

        setInvoice({...invoice, detalles})
    }

    const calculateAmount = (quantity: string, rate: string) => {
        const quantityNumber = parseFloat(quantity)
        const rateNumber = parseFloat(rate)
        const amount = quantityNumber && rateNumber ? quantityNumber * rateNumber : 0

        return amount.toFixed(0)
    }

    useEffect(() => {
        let subTotal = 0

        invoice.detalles.forEach((detalle) => {
            const quantityNumber = parseFloat(detalle.cantidad)
            const rateNumber = parseFloat(detalle.precio)
            const amount = quantityNumber && rateNumber ? quantityNumber * rateNumber : 0

            subTotal += amount
        })

        setSubTotal(subTotal)
    }, [invoice.detalles])


    useEffect(() => {
        const match = invoice.ivaLabel.match(/(\d+)%/)
        const taxRate = match ? parseFloat(match[1]) : 0
        const saleTax = subTotal ? (subTotal * taxRate) / 100 : 0

        setSaleTax(saleTax)
    }, [subTotal, invoice.ivaLabel])

    const {loading, error, data} = useQuery(GET_ALL_EMPRESAS);
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    console.log("XEJEM: " + data.getAllEmpresas.map((empresa: any) => empresa.nombre).toString())


    // invoice.test = data.getAllEmpresas.map((empresa:any) => empresa.nombreReceptor).toString();
    // invoice.nombreReceptor = data.getAllEmpresas.map((empresa:any) => empresa.nombreReceptor).toString();
    // invoice.rutReceptor = data.getAllEmpresas.map((empresa:any) => empresa.rutReceptor).toString();
    // invoice.dirRecep = data.getAllEmpresas.map((empresa:any) => empresa.direccion).toString();
    // invoice.giroReceptor = data.getAllEmpresas.map((empresa:any) => empresa.giroReceptor).toString();
    // invoice.comunaRecep = data.getAllEmpresas.map((empresa:any) => empresa.comunaRecep).toString();
    // invoice.ciudadRecep = data.getAllEmpresas.map((empresa:any) => empresa.ciudadRecep).toString();

    return (

        <Document pdfMode={pdfMode}>
            <Page className="invoice-wrapper" pdfMode={pdfMode}>
                {/*{!pdfMode && <Download dataInvoice={invoice}/>}*/}

                <View className="flex" pdfMode={pdfMode}>
                    <View className="w-55" pdfMode={pdfMode}>

                        <EditableInput
                            // className="bold w-100_custom"
                            value={invoice.rutReceptor}
                            placeholder="Rut Receptor"
                            onChange={(value) => handleChange('rutReceptor', value)}
                            pdfMode={pdfMode}
                        />
                        <EditableInput
                            className="bold w-100_custom"
                            value={invoice.nombreReceptor}
                            placeholder="Nombre Receptor"
                            onChange={(value) => handleChange('nombreReceptor', value)}
                            pdfMode={pdfMode}
                        />
                        <EditableInput
                            // className="bold w-100_custom"
                            value={invoice.giroReceptor}
                            placeholder="Giro Receptor"
                            onChange={(value) => handleChange('giroReceptor', value)}
                            pdfMode={pdfMode}
                        />
                        <EditableInput
                            placeholder="Dirección Receptor"
                            value={invoice.dirRecep}
                            onChange={(value) => handleChange('dirRecep', value)}
                            pdfMode={pdfMode}
                        />
                        <EditableInput
                            placeholder="Ciudad Receptor"
                            value={invoice.ciudadRecep}
                            onChange={(value) => handleChange('ciudadRecep', value)}
                            pdfMode={pdfMode}
                        />
                        {/*<EditableInput*/}
                        {/*    // placeholder="City, State Zip"*/}
                        {/*    // value={invoice.ciudadRecep}*/}
                        {/*    onChange={(value) => handleChange('dirRecep', value)}*/}
                        {/*    pdfMode={pdfMode}*/}
                        {/*/>*/}
                        {/*<EditableSelect*/}
                        {/*    // options={dirRecep}*/}
                        {/*    value={invoice.comunaRecep}*/}
                        {/*    onChange={(value) => handleChange('dirRecep', value)}*/}
                        {/*    pdfMode={pdfMode}*/}
                        {/*/> */}
                    </View>

                </View>

                <View className="mt-30 bg-dark flex" pdfMode={pdfMode}>
                    <View className="w-48 p-4-8" pdfMode={pdfMode}>
                        <EditableInput
                            className="white bold"
                            value={invoice.descripcionTitle}
                            onChange={(value) => handleChange('descripcionTitle', value)}
                            pdfMode={pdfMode}
                        />
                    </View>

                    <View className="w-17 p-4-8" pdfMode={pdfMode}>
                        <EditableInput
                            className="white bold right"
                            value={invoice.cantidadTitle}
                            onChange={(value) => handleChange('cantidadTitle', value)}
                            pdfMode={pdfMode}
                        />
                    </View>

                    <View className="w-17 p-4-8" pdfMode={pdfMode}>
                        <EditableInput
                            className="white bold right"
                            value={invoice.precioTitle}
                            onChange={(value) => handleChange('precioTitle', value)}
                            pdfMode={pdfMode}
                        />
                    </View>

                    <View className="w-18 p-4-8" pdfMode={pdfMode}>
                        <EditableInput
                            className="white bold right"
                            value={invoice.montoTitle}
                            onChange={(value) => handleChange('montoTitle', value)}
                            pdfMode={pdfMode}
                        />
                    </View>

                </View>

                {invoice.detalles.map((detalle, i) => {
                    return pdfMode && detalle.nombreitem === '' ? (
                        <Text key={i}></Text>
                    ) : (
                        <View key={i} className="roww flex" pdfMode={pdfMode}>

                            <View className="w-48 p-4-8 pb-10" pdfMode={pdfMode}>
                                <EditableTextarea
                                    className="dark"
                                    rows={2}
                                    placeholder="Enter item name/description"
                                    value={detalle.nombreitem}
                                    onChange={(value) => handleProductLineChange(i, 'nombreitem', value)}
                                    pdfMode={pdfMode}
                                />
                            </View>

                            <View className="w-17 p-4-8 pb-10" pdfMode={pdfMode}>
                                <EditableInput
                                    className="dark right"
                                    value={detalle.cantidad}
                                    onChange={(value) => handleProductLineChange(i, 'cantidad', value)}
                                    pdfMode={pdfMode}
                                />
                            </View>

                            <View className="w-17 p-4-8 pb-10" pdfMode={pdfMode}>
                                <EditableInput
                                    className="dark right"
                                    value={detalle.precio}
                                    onChange={(value) => handleProductLineChange(i, 'precio', value)}
                                    pdfMode={pdfMode}
                                />
                            </View>

                            <View className="w-18 p-4-8 pb-10" pdfMode={pdfMode}>
                                <Text className="dark right" pdfMode={pdfMode}>
                                    {calculateAmount(detalle.cantidad, detalle.precio)}
                                </Text>

                            </View>
                            {!pdfMode && (
                                <button
                                    className="link row__remove"
                                    aria-label="Remove Row"
                                    title="Remove Row"
                                    onClick={() => handleRemove(i)}
                                >
                                    <span className="icon icon-remove bg-red"></span>
                                </button>
                            )}
                        </View>
                    )
                })}

                <View className="flex" pdfMode={pdfMode}>
                    <View className="w-50_custom mt-10" pdfMode={pdfMode}>
                        {!pdfMode && (
                            <button className="link" onClick={handleAdd}>
                                <span className="icon icon-add bg-green mr-10"></span>
                                Add Line Item
                            </button>
                        )}
                    </View>

                    <View className="w-50_custom mt-20" pdfMode={pdfMode}>
                        <View className="flex" pdfMode={pdfMode}>
                            <View className="w-50_custom p-5_custom" pdfMode={pdfMode}>
                                <EditableInput
                                    value={invoice.subtotal}
                                    onChange={(value) => handleChange('subtotal', value)}
                                    pdfMode={pdfMode}
                                />
                            </View>
                            <View className="w-50_custom p-5_custom" pdfMode={pdfMode}>
                                <Text className="right bold dark" pdfMode={pdfMode}>
                                    {subTotal?.toFixed(0)}
                                </Text>
                            </View>
                        </View>
                        <View className="flex" pdfMode={pdfMode}>
                            <View className="w-50_custom p-5_custom" pdfMode={pdfMode}>
                                <EditableInput
                                    value={invoice.ivaLabel}
                                    onChange={(value) => handleChange('ivaLabel', value)}
                                    pdfMode={pdfMode}
                                />
                            </View>
                            <View className="w-50_custom p-5_custom" pdfMode={pdfMode}>
                                <Text className="right bold dark" pdfMode={pdfMode}>
                                    {saleTax?.toFixed(0)}
                                </Text>
                            </View>
                        </View>
                        <View className="flex bg-gray p-5_custom" pdfMode={pdfMode}>
                            <View className="w-50_custom p-5_custom" pdfMode={pdfMode}>
                                <EditableInput
                                    className="bold"
                                    value={invoice.total}
                                    onChange={(value) => handleChange('total', value)}
                                    pdfMode={pdfMode}
                                />
                            </View>
                            <View className="w-50_custom p-5_custom flex" pdfMode={pdfMode}>
                                <EditableInput
                                    className="dark bold right ml-30"
                                    value={"$"}
                                    // onChange={(value) => handleChange('currency', value)}
                                    pdfMode={pdfMode}
                                />
                                <Text className="right bold dark w-auto" pdfMode={pdfMode}>
                                    {(typeof subTotal !== 'undefined' && typeof saleTax !== 'undefined'
                                            ? subTotal + saleTax
                                            : 0
                                    ).toFixed(0)}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>

                {/*<View className="mt-20" pdfMode={pdfMode}>*/}
                {/*    <EditableInput*/}
                {/*        className="bold w-100_custom"*/}
                {/*        value={invoice.notesLabel}*/}
                {/*        onChange={(value) => handleChange('notesLabel', value)}*/}
                {/*        pdfMode={pdfMode}*/}
                {/*    />*/}
                {/*    <EditableTextarea*/}
                {/*        className="w-100_custom"*/}
                {/*        rows={2}*/}
                {/*        value={invoice.notes}*/}
                {/*        onChange={(value) => handleChange('notes', value)}*/}
                {/*        pdfMode={pdfMode}*/}
                {/*    />*/}
                {/*</View>*/}
                <View className="mt-20" pdfMode={pdfMode}>
                    {/*<EditableInput*/}
                    {/*    className="bold w-100_custom"*/}
                    {/*    value={invoice.termLabel}*/}
                    {/*    onChange={(value) => handleChange('termLabel', value)}*/}
                    {/*    pdfMode={pdfMode}*/}
                    {/*/>*/}
                    {/*<EditableTextarea*/}
                    {/*    className="w-100_custom"*/}
                    {/*    rows={2}*/}
                    {/*    value={invoice.term}*/}
                    {/*    onChange={(value) => handleChange('term', value)}*/}
                    {/*    pdfMode={pdfMode}*/}
                    {/*/>*/}
                    <button
                        onClick={() => {
                            let varTot = '' + subTotal + saleTax
                            console.log("TOTAL: " + subTotal + saleTax)
                            createDte({
                                variables: {
                                    tipodoc: "39",
                                    folio: "8111",
                                    fechaemision: invoice.fechaEmision,
                                    indservicio: invoice.indServicio,
                                    rutemisor: invoice.rutEmisor,
                                    rutreceptor: invoice.rutReceptor,
                                    montoneto: "1",
                                    tasaiva: "0,19",
                                    iva: "1",
                                    montototal: varTot,
                                    trackid: "",
                                    estado: 1,
                                    detalles: invoice.detalles
                                    // detalles: [{nombreitem: "Test", cantidad: "323", precio: "5555"}]

                                },
                            }).then(data => {

                            }).catch(e => {
                                console.log("ERROR: " + e)

                                // you can do something with the error here
                            });
                        }}
                    >
                        Crear DTE
                    </button>
                </View>
            </Page>
        </Document>
    )
}

export default InvoicePage
