import {GraphQLString} from "graphql";
import {MessageType} from "../TypeDefs/Messages";
import {CafType} from "../TypeDefs/Caf";
import {Caf} from "../../Entities/Caf";
import {ListDistrType} from "../TypeDefs/ListDistr";
import {ListDistrSii} from "../../Entities/ListDistrSii";

export const CREATE_DISTR = {
    type: ListDistrType,
    args: {
        rut: {type: GraphQLString},
        rznSocial: {type: GraphQLString},
        nroResolucion: {type: GraphQLString},
        mailIntercambio: {type: GraphQLString},
        url: {type: GraphQLString},

    }
    ,
    async resolve(parent: any, args: any) {
        const {
            rut,
            rznSocial,
            nroResolucion,
            mailIntercambio,
            url
        } = args;

        // console.log(args)


        const cafId = await ListDistrSii.insert({
            rut,
            rznSocial,
            nroResolucion,
            mailIntercambio,
            url
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
