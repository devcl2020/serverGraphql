import {GraphQLInputObjectType, GraphQLInt, GraphQLList, GraphQLString} from "graphql";

import {RecibidosType} from "../TypeDefs/Recibido";
import {DetalleRecep} from "../../Entities/DetalleRecep";
import {Recibidos} from "../../Entities/Recibidos";

const DetalleRecepInput = new GraphQLInputObjectType({
    name: "DetalleRecepInput",
    fields: () => ({
        nombreitem: {type: GraphQLString},
        cantidad: {type: GraphQLString},
        precio: {type: GraphQLString},
        montoitem: {type: GraphQLString},

    })
});

export const CREATE_DTE_RECEP = {
    type: RecibidosType,
    args: {
        id: {type: GraphQLInt},
        tipodoc: {type: GraphQLString},
        folio: {type: GraphQLString},
        fechaemision: {type: GraphQLString},

        indservicio: {type: GraphQLString},
        rutemisor: {type: GraphQLString},
        rutreceptor: {type: GraphQLString},
        nombreemisor: {type: GraphQLString},

        montoneto: {type: GraphQLString},
        tasaiva: {type: GraphQLString},
        iva: {type: GraphQLString},
        montototal: {type: GraphQLString},

        estado: {type: GraphQLInt},

        xml: {type: GraphQLString},

        estadosii: {type: GraphQLString},

        detallesRecep: {
            type: new GraphQLList(DetalleRecepInput)
        }
    }
    ,
    async resolve(parent: any, args: any) {

        const {
            tipodoc,
            folio,
            fechaemision,
            indservicio,
            rutemisor,
            rutreceptor,
            nombreemisor,
            montoneto,
            tasaiva,
            iva,
            montototal,
            estado,
            xml,
            estadosii,
            detallesRecep
        } = args;

        // console.log(args)

        const a = JSON.parse(JSON.stringify(args.detallesRecep));


        const dteId = await Recibidos.insert({
            tipodoc,
            folio,
            fechaemision,
            indservicio,
            rutemisor,
            rutreceptor,
            nombreemisor,
            montoneto,
            tasaiva,
            iva,
            montototal,
            estado,
            xml,
            estadosii
        });

  console.log("DTE ID: " + dteId)


        a.map((detalle: any) => {

                let dte_id: any = JSON.stringify(dteId.identifiers);

                const dteRes = JSON.parse(dte_id, (key, value) => {
                    return value;
                });

                args.id = dte_id;

                dteRes.map((dteres: any) => {
                    console.log("DTEID: " + dteres.id)
                    dte_id = dteres.id
                })

                let nombreitem = detalle.nombreitem;
                let cantidad = detalle.cantidad;
                let precio = detalle.precio;
                let montoitem = detalle.montoitem

                dte_id = parseInt(dte_id, 10);

                DetalleRecep.insert({dte_id, nombreitem, cantidad, precio, montoitem})
                // console.log("EEE: " + detalle.nombreItem)
            }
        )

        // a.forEach((detalle:any) => {
        //     Detalle.insert(detalle.nombreItem,detalle.precio )
        // })
        //     Detalle.insert(detalle.nombreItem,detalle.precio )
        // })


        return args;
    },

};