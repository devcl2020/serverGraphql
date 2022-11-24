import {GraphQLInt, GraphQLList, GraphQLString} from "graphql";
import {Emitidos} from "../../Entities/Emitidos";
import {Detalle} from "../../Entities/Detalle"
import {EmitidosType} from "../TypeDefs/Emitido";
import {DetalleType} from "../TypeDefs/Detalle";
import {Users} from "../../Entities/Users";
import {Caf} from "../../Entities/Caf";
import {Between, In, Raw} from "typeorm";
import {XmlType} from "../TypeDefs/Xml";
import {Xml} from "../../Entities/Xml";

export const GET_XML = {
    type: new GraphQLList(XmlType),
    args: {
        idEmitido: {type: GraphQLList(GraphQLInt)},
    },
    resolve(parent: any, args: any) {
        const {idEmitido} = args;

            return Xml.find({
                where: {
                    idemitidos: In([idEmitido]),
                }
                ,
            })


        // if (args.estado) {
        //    return Emitidos.find({estado: estado});
        // }
        //
        // if (args.rutemisor) {
        //     return Emitidos.find({rutemisor: rutemisor});
        // }


    }
    ,
};


