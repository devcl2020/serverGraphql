import {GraphQLID, GraphQLInputObjectType, GraphQLString, GraphQLList, GraphQLInt} from "graphql";
import {MessageType} from "../TypeDefs/Messages";
import {Detalle} from "../../Entities/Detalle";
import {DetalleType} from "../TypeDefs/Detalle";
import {EmitidosType} from "../TypeDefs/Emitido";
import {Emitidos} from "../../Entities/Emitidos";


const DetalleInput = new GraphQLInputObjectType({
    name: "DetalleInput",
    fields: () => ({
        nombreitem: {type: GraphQLString},
        cantidad: {type: GraphQLString},
        precio: {type: GraphQLString},
        montoitem: {type: GraphQLString},

    })
});

export const CREATE_DTE = {
    type: EmitidosType,
    args: {
        id: {type: GraphQLInt},
        tipodoc: {type: GraphQLString},
        folio: {type: GraphQLString},
        fechaemision: {type: GraphQLString},

        indservicio: {type: GraphQLString},
        rutemisor: {type: GraphQLString},
        rutreceptor: {type: GraphQLString},
        nombrereceptor: {type: GraphQLString},

        montoneto: {type: GraphQLString},
        tasaiva: {type: GraphQLString},
        iva: {type: GraphQLString},
        montototal: {type: GraphQLString},
        trackid: {type: GraphQLString},

        estado: {type: GraphQLInt},

        idcaf: {type: GraphQLString},

        xml: {type: GraphQLString},

        estadosii: {type: GraphQLString},

        detalles: {
            type: new GraphQLList(DetalleInput)
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
            nombrereceptor,
            montoneto,
            tasaiva,
            iva,
            montototal,
            trackid,
            estado,
            idcaf,
            xml,
            estadosii,
            detalles
        } = args;

        // console.log(args)

        const a = JSON.parse(JSON.stringify(args.detalles));
        const dteId = await Emitidos.insert({
            tipodoc,
            folio,
            fechaemision,
            indservicio,
            rutemisor,
            rutreceptor,
            nombrereceptor,
            montoneto,
            tasaiva,
            iva,
            montototal,
            trackid,
            estado,
            idcaf,
            xml,
            estadosii
        });




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

                Detalle.insert({dte_id, nombreitem, cantidad, precio, montoitem})
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

export const UPDATE_ESTADO = {
    type: MessageType,
    args: {
        rutemisor: {type: GraphQLString},
        tipodoc: {type: GraphQLString},
        folio: {type: GraphQLString},
        estado: {type: GraphQLString}
    },
    async resolve(parent: any, args: any) {
        const {rutemisor,tipodoc, folio,  estado} = args;
        const dte = await Emitidos.findOne({rutemisor: rutemisor,tipodoc: tipodoc, folio: folio });

        if (!dte) {
            throw new Error("DTE DOESNT EXIST");
        }

        await Emitidos.update({rutemisor: rutemisor,tipodoc: tipodoc, folio: folio }, {estado: estado}, );
        return {successful: true, message: "DTE UPDATED"};

    },
};


export const UPDATE_ESTADO_TRACKID = {
    type: MessageType,
    args: {
        rutemisor: {type: GraphQLString},
        tipodoc: {type: GraphQLString},
        folio: {type: GraphQLString},
        estado: {type: GraphQLString},
        trackid: {type: GraphQLString},

    },
    async resolve(parent: any, args: any) {
        const {rutemisor,tipodoc, folio,  estado, trackid} = args;
        const dte = await Emitidos.findOne({rutemisor: rutemisor,tipodoc: tipodoc, folio: folio });

        if (!dte) {
            throw new Error("DTE DOESNT EXIST");
        }

        await Emitidos.update({rutemisor: rutemisor,tipodoc: tipodoc, folio: folio }, {estado: estado, trackid: trackid}, );
        return {successful: true, message: "DTE UPDATED"};

    },
};

export const UPDATE_ESTADOSII = {
    type: MessageType,
    args: {
        rutemisor: {type: GraphQLString},
        tipodoc: {type: GraphQLString},
        trackid: {type: GraphQLString},
        estado: {type: GraphQLString},
        estadoSII: {type: GraphQLString}

    },
    async resolve(parent: any, args: any) {
        const {rutemisor,tipodoc, trackid,  estado, estadoSII} = args;
        const dte = await Emitidos.findOne({rutemisor: rutemisor,tipodoc: tipodoc, trackid: trackid });

        if (!dte) {
            throw new Error("DTE DOESNT EXIST");
        }

        await Emitidos.update({rutemisor: rutemisor,tipodoc: tipodoc, trackid: trackid }, {estado: estado, estadosii: estadoSII}, );
        return {successful: true, message: "DTE UPDATED"};

    },
};
//
// export const DELETE_USER = {
//     type: MessageType,
//     args: {
//         id: { type: GraphQLID },
//     },
//     async resolve(parent: any, args: any) {
//         const id = args.id;
//         await Users.delete(id);
//
//         return { successful: true, message: "DELETE WORKED" };
//     },
// };
