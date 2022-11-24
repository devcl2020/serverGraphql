import {GraphQLString} from "graphql";
import {MessageType} from "../TypeDefs/Messages";
import {CafType} from "../TypeDefs/Caf";
import {Caf} from "../../Entities/Caf";

export const CREATE_CAF = {
    type: CafType,
    args: {
        rutEmisor: {type: GraphQLString},
        tipoDoc: {type: GraphQLString},
        cafSTR: {type: GraphQLString},
        privateKey: {type: GraphQLString},
        publicKey: {type: GraphQLString},
        desde: {type: GraphQLString},
        hasta: {type: GraphQLString},
        actual: {type: GraphQLString},
        fechaAut: {type: GraphQLString},
        estado: {type: GraphQLString},
        RE: {type: GraphQLString},
        RS: {type: GraphQLString},
        TD: {type: GraphQLString},
        D: {type: GraphQLString},
        H: {type: GraphQLString},
        TA: {type: GraphQLString},
        M: {type: GraphQLString},
        E: {type: GraphQLString},
        IDK: {type: GraphQLString},
        FRMA: {type: GraphQLString},
    }
    ,
    async resolve(parent: any, args: any) {
        const {
            rutEmisor,
            tipoDoc,
            cafSTR,
            privateKey,
            publicKey,
            desde,
            hasta,
            actual,
            fechaAut,
            estado,
            RE,
            RS,
            TD,
            D,
            H,
            TA,
            M,
            E,
            IDK,
            FRMA
        } = args;

        // console.log(args)


        const cafId = await Caf.insert({
            rutEmisor,
            tipoDoc,
            cafSTR,
            privateKey,
            publicKey,
            desde,
            hasta,
            actual,
            fechaAut,
            estado,
            RE,
            RS,
            TD,
            D,
            H,
            TA,
            M,
            E,
            IDK,
            FRMA

        });
        return args;
    },
};

export const UPDATE_FOLIOACTUAL = {
    type: MessageType,
    args: {
        rutEmisor: {type: GraphQLString},
        tipoDoc: {type: GraphQLString},
        actual: {type: GraphQLString},
        estado: {type: GraphQLString},
        nuevoActual: {type: GraphQLString}
    },
    async resolve(parent: any, args: any) {
        const {rutEmisor, tipoDoc, actual, estado, nuevoActual} = args;

        const caf = await Caf.findOne({rutEmisor: rutEmisor, tipoDoc: tipoDoc, actual: actual});

        if (!caf) {
            throw new Error("CAF DOESNT EXIST");
        }

        await Caf.update({rutEmisor: rutEmisor, tipoDoc: tipoDoc, actual: actual}, {
            actual: nuevoActual,
            estado: estado
        },);
        return {successful: true, message: "CAF UPDATED"};

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
