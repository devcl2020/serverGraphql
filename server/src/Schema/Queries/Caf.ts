import {GraphQLInt, GraphQLList, GraphQLString} from "graphql";
import {CafType} from "../TypeDefs/Caf";
import {Caf} from "../../Entities/Caf";

export const GET_CAF = {
    type: new GraphQLList(CafType),
    args: {
        rutEmisor: {type: GraphQLString},
        desde: {type: GraphQLString},
        hasta: {type: GraphQLString},
        tipoDoc: {type: GraphQLString},
        estado: {type: GraphQLString}
    },
    resolve(parent: any, args: any) {
        const {rutEmisor, desde, hasta, tipoDoc, estado} = args;

        // if (args.rutEmisor) {
        //     return Caf.find({rutEmisor: rutEmisor});
        // }

        // if (args.desde) {
        //     return Caf.find({desde: desde});
        // }
        //
        // if (args.hasta) {
        //     return Caf.find({hasta: hasta});
        // }

        // if (args.tipoDoc) {


        // return Caf.find({tipoDoc: tipoDoc, rutEmisor: rutEmisor,
        //                                  desde: desde, hasta: hasta});

        if (args.tipoDoc) {
            if (args.rutEmisor) {
                if (args.estado) {
                    if (args.desde) {
                        if (args.hasta) {
                            return Caf.find({
                                where: {
                                    tipoDoc: tipoDoc,
                                    rutEmisor: rutEmisor,
                                    estado: estado,
                                    desde: desde,
                                    hasta: hasta,
                                },
                            })
                        } else {
                            return Caf.find({
                                where: {
                                    tipoDoc: tipoDoc,
                                    rutEmisor: rutEmisor,
                                    estado: estado,
                                    desde: desde,
                                },
                            })
                        }
                    } else {
                        return Caf.find({
                            where: {
                                tipoDoc: tipoDoc,
                                rutEmisor: rutEmisor,
                                estado: estado,
                            },
                        })
                    }
                } else {
                    if (args.desde) {
                        if (args.hasta) {
                            return Caf.find({
                                where: {
                                    tipoDoc: tipoDoc,
                                    rutEmisor: rutEmisor,
                                    desde: desde,
                                    hasta: hasta,
                                },
                            })
                        } else {
                            return Caf.find({
                                where: {
                                    tipoDoc: tipoDoc,
                                    rutEmisor: rutEmisor,
                                    estado: estado,
                                    desde: desde,
                                },
                            })
                        }
                    }
                    return Caf.find({
                        where: {
                            tipoDoc: tipoDoc,
                            rutEmisor: rutEmisor,
                        },
                    })
                }
            } else {
                if (args.estado) {
                    return Caf.find({
                        where: {
                            tipoDoc: tipoDoc,
                            estado: estado
                        },
                    })
                }
            }
        } else {
            return Caf.find({
                where: {
                    tipoDoc: tipoDoc
                },
            })
        }


        // return Caf.find({
        //      where: {
        //          tipoDoc: tipoDoc,
        //          rutEmisor: rutEmisor,
        //      },
        //  })

        // }


    }
    ,
};

export const GET_CAF_ACTIVO = {
    type: new GraphQLList(CafType),
    args: {
        rutEmisor: {type: GraphQLString},
        tipoDoc: {type: GraphQLString},
        estado: {type: GraphQLString}
    },
    resolve(parent: any, args: any) {
        const {rutEmisor, tipoDoc, estado} = args;

        return Caf.find({
            rutEmisor: rutEmisor, tipoDoc: tipoDoc,
            estado: estado
        });


    },
};

export const GET_ALL_CAF= {
    type: new GraphQLList(CafType),
    resolve() {
        return Caf.find();
    },
};


export const GET_CAF_BYID = {
    type: new GraphQLList(CafType),
    args: {
        id: {type: GraphQLString},
    },
    resolve(parent: any, args: any) {
        const {id} = args;

        return Caf.find({
            id: id
        });


    },
};

