import {GraphQLInt, GraphQLString} from "graphql";
import {MessageType} from "../TypeDefs/Messages";
import {CafType} from "../TypeDefs/Caf";
import {Caf} from "../../Entities/Caf";
import {XmlType} from "../TypeDefs/Xml";
import {Xml} from "../../Entities/Xml";
import {Emitidos} from "../../Entities/Emitidos";

export const CREATE_XML = {
    type: XmlType,
    args: {
        idemitidos: {type: GraphQLInt},
        tipodte: {type: GraphQLString},
        folio: {type: GraphQLString},
        xml: {type: GraphQLString},
    }
    ,
    async resolve(parent: any, args: any) {
        const {
            idemitidos,
            tipodte,
            folio,
            xml
        } = args;

        // console.log(args)


        // const emitido = await Emitidos.findByIds(idemitidos);


        const xmlId = await Xml.insert({
            idemitidos,
            tipodte,
            folio,
            xml
        });
        return args;
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
