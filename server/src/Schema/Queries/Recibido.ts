import {GraphQLList, GraphQLString} from "graphql";
import {Between} from "typeorm";
import {RecibidosType} from "../TypeDefs/Recibido";
import {Recibidos} from "../../Entities/Recibidos";
import {EmitidosType} from "../TypeDefs/Emitido";
import {Emitidos} from "../../Entities/Emitidos";

export const GET_RECIBIDO = {
    type: new GraphQLList(RecibidosType),
    args: {
        estado: {type: GraphQLString},
        fechaDesde: {type: GraphQLString},
        fechaHasta: {type: GraphQLString},
        folioDesde: {type: GraphQLString},
        folioHasta: {type: GraphQLString},
        rutReceptor: {type: GraphQLString},
        rutEmisor: {type: GraphQLString},
        tipoDoc: {type: GraphQLString}
    },
    resolve(parent: any, args: any) {
        const {estado, fechaDesde, fechaHasta, folioDesde, folioHasta, rutReceptor, rutEmisor, tipoDoc} = args;

        if (args.fechaDesde) {

            if (args.fechaHasta) {

                if (args.folioDesde) {

                    if (args.folioHasta) {

                        if (args.rutReceptor) {

                            if (args.estado) {

                                if (args.tipoDoc) {
                                    return Recibidos.find({
                                        where: {
                                            fechaemision: Between(fechaDesde, fechaHasta),
                                            folio: Between(folioDesde, folioHasta),
                                            rutreceptor: rutReceptor,
                                            estado: estado,
                                            tipodoc: tipoDoc
                                        },

                                    })
                                } else {
                                    return Recibidos.find({
                                        where: {
                                            fechaemision: Between(fechaDesde, fechaHasta),
                                            folio: Between(folioDesde, folioHasta),
                                            rutreceptor: rutReceptor,
                                            estado: estado
                                        },

                                    })
                                }
                            } else {

                                if (args.tipoDoc) {
                                    return Recibidos.find({
                                        where: {
                                            fechaemision: Between(fechaDesde, fechaHasta),
                                            folio: Between(folioDesde, folioHasta),
                                            rutreceptor: rutReceptor,
                                            tipodoc: tipoDoc
                                        },

                                    })
                                } else {

                                    return Recibidos.find({
                                        where: {
                                            fechaemision: Between(fechaDesde, fechaHasta),
                                            folio: Between(folioDesde, folioHasta),
                                            rutreceptor: rutReceptor,
                                        },

                                    })
                                }
                            }
                        } else {

                            if (args.estado) {
                                if (args.tipoDoc) {
                                    return Recibidos.find({
                                        where: {
                                            fechaemision: Between(fechaDesde, fechaHasta),
                                            folio: Between(folioDesde, folioHasta),
                                            estado: estado,
                                            tipodoc: tipoDoc
                                        },

                                    })
                                } else {
                                    return Recibidos.find({
                                        where: {
                                            fechaemision: Between(fechaDesde, fechaHasta),
                                            folio: Between(folioDesde, folioHasta),
                                            estado: estado,
                                        },

                                    })
                                }
                            } else {
                                if (args.tipoDoc) {
                                    return Recibidos.find({
                                        where: {
                                            fechaemision: Between(fechaDesde, fechaHasta),
                                            folio: Between(folioDesde, folioHasta),
                                            tipodoc: tipoDoc
                                        },

                                    })
                                } else {

                                    return Recibidos.find({
                                        where: {
                                            fechaemision: Between(fechaDesde, fechaHasta),
                                            folio: Between(folioDesde, folioHasta),
                                        },

                                    })
                                }
                            }
                        }
                    }

                    // return Recibidos.find({
                    //     where: {
                    //         fechaemision: Between(fechaDesde, fechaHasta),
                    //         folio: Between(folioDesde, folioDesde),
                    //     },
                    //
                    // })

                } else { //Si no hay folio Desde
                    if (args.rutReceptor) {

                        if (args.estado) {

                            if (args.tipoDoc) {
                                return Recibidos.find({
                                    where: {
                                        fechaemision: Between(fechaDesde, fechaHasta),
                                        folio: Between(folioDesde, folioHasta),
                                        rutreceptor: rutReceptor,
                                        estado: estado,
                                        tipodoc: tipoDoc
                                    },

                                })
                            } else {
                                return Recibidos.find({
                                    where: {
                                        fechaemision: Between(fechaDesde, fechaHasta),
                                        rutreceptor: rutReceptor,
                                        estado: estado
                                    },

                                })
                            }
                        } else {

                            if (args.tipoDoc) {
                                return Recibidos.find({
                                    where: {
                                        fechaemision: Between(fechaDesde, fechaHasta),
                                        rutreceptor: rutReceptor,
                                        tipodoc: tipoDoc
                                    },

                                })
                            } else {
                                return Recibidos.find({
                                    where: {
                                        fechaemision: Between(fechaDesde, fechaHasta),
                                        rutreceptor: rutReceptor,
                                    },
                                })
                            }
                        }
                    } else {
                        if (args.estado) {
                            if (args.tipoDoc) {
                                return Recibidos.find({
                                    where: {
                                        fechaemision: Between(fechaDesde, fechaHasta),
                                        folio: Between(folioDesde, folioHasta),
                                        estado: estado,
                                        tipodoc: tipoDoc
                                    },
                                })
                            } else {
                                return Recibidos.find({
                                    where: {
                                        fechaemision: Between(fechaDesde, fechaHasta),
                                        estado: estado,
                                    },

                                })
                            }
                        } else {
                            if (args.tipoDoc) {
                                return Recibidos.find({
                                    where: {
                                        fechaemision: Between(fechaDesde, fechaHasta),
                                        folio: Between(folioDesde, folioHasta),
                                        tipodoc: tipoDoc
                                    },

                                })
                            } else {

                                return Recibidos.find({
                                    where: {
                                        fechaemision: Between(fechaDesde, fechaHasta),
                                    },

                                })
                            }
                        }
                    }
                }
            }
        } else {

            return Recibidos.find({
                where: {
                    fechaemision:
                        Between(fechaDesde, fechaDesde),
                },
            })

        }


        // if (args.estado) {
        //    return Recibidos.find({estado: estado});
        // }
        //
        // if (args.rutemisor) {
        //     return Recibidos.find({rutemisor: rutemisor});
        // }


    }
    ,


};


export const GET_RECIBIDO_BYID = {
    type: new GraphQLList(RecibidosType),
    args: {
        id: {type: GraphQLString},
    },
    resolve(parent: any, args: any) {
        const {id} = args;

        return Recibidos.find({
            id: id
        });


    },
};