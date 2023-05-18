import {GraphQLInt, GraphQLList, GraphQLString} from "graphql";
import {Emitidos} from "../../Entities/Emitidos";
import {Detalle} from "../../Entities/Detalle"
import {EmitidosType} from "../TypeDefs/Emitido";
import {DetalleType} from "../TypeDefs/Detalle";
import {Users} from "../../Entities/Users";
import {Caf} from "../../Entities/Caf";
import {Between, Raw} from "typeorm";
import {CafType} from "../TypeDefs/Caf";


export const GET_EMITIDO = {
    type: new GraphQLList(EmitidosType),
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
                                    return Emitidos.find({
                                        where: {
                                            fechaemision: Between(fechaDesde, fechaHasta),
                                            folio: Between(folioDesde, folioHasta),
                                            rutreceptor: rutReceptor,
                                            estado: estado,
                                            tipodoc: tipoDoc
                                        },order: {
                                            id: "DESC"
                                        },

                                    })
                                } else {
                                    return Emitidos.find({
                                        where: {
                                            fechaemision: Between(fechaDesde, fechaHasta),
                                            folio: Between(folioDesde, folioHasta),
                                            rutreceptor: rutReceptor,
                                            estado: estado
                                        },order: {
                                            id: "DESC"
                                        },

                                    })
                                }
                            } else {

                                if (args.tipoDoc) {
                                    return Emitidos.find({
                                        where: {
                                            fechaemision: Between(fechaDesde, fechaHasta),
                                            folio: Between(folioDesde, folioHasta),
                                            rutreceptor: rutReceptor,
                                            tipodoc: tipoDoc
                                        },order: {
                                            id: "DESC"
                                        },

                                    })
                                } else {

                                    return Emitidos.find({
                                        where: {
                                            fechaemision: Between(fechaDesde, fechaHasta),
                                            folio: Between(folioDesde, folioHasta),
                                            rutreceptor: rutReceptor,
                                        },order: {
                                            id: "DESC"
                                        },

                                    })
                                }
                            }
                        } else {

                            if (args.estado) {
                                if (args.tipoDoc) {
                                    return Emitidos.find({
                                        where: {
                                            fechaemision: Between(fechaDesde, fechaHasta),
                                            folio: Between(folioDesde, folioHasta),
                                            estado: estado,
                                            tipodoc: tipoDoc
                                        },order: {
                                            id: "DESC"
                                        },

                                    })
                                } else {
                                    return Emitidos.find({
                                        where: {
                                            fechaemision: Between(fechaDesde, fechaHasta),
                                            folio: Between(folioDesde, folioHasta),
                                            estado: estado,
                                        },order: {
                                            id: "DESC"
                                        },

                                    })
                                }
                            } else {
                                if (args.tipoDoc) {
                                    return Emitidos.find({
                                        where: {
                                            fechaemision: Between(fechaDesde, fechaHasta),
                                            folio: Between(folioDesde, folioHasta),
                                            tipodoc: tipoDoc
                                        },order: {
                                            id: "DESC"
                                        },

                                    })
                                } else {

                                    return Emitidos.find({
                                        where: {
                                            fechaemision: Between(fechaDesde, fechaHasta),
                                            folio: Between(folioDesde, folioHasta),
                                        },order: {
                                            id: "DESC"
                                        },

                                    })
                                }
                            }
                        }
                    }

                    // return Emitidos.find({
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
                                return Emitidos.find({
                                    where: {
                                        fechaemision: Between(fechaDesde, fechaHasta),
                                        folio: Between(folioDesde, folioHasta),
                                        rutreceptor: rutReceptor,
                                        estado: estado,
                                        tipodoc: tipoDoc
                                    },order: {
                                        id: "DESC"
                                    },

                                })
                            } else {
                                return Emitidos.find({
                                    where: {
                                        fechaemision: Between(fechaDesde, fechaHasta),
                                        rutreceptor: rutReceptor,
                                        estado: estado
                                    },order: {
                                        id: "DESC"
                                    },

                                })
                            }
                        } else {

                            if (args.tipoDoc) {
                                return Emitidos.find({
                                    where: {
                                        fechaemision: Between(fechaDesde, fechaHasta),
                                        rutreceptor: rutReceptor,
                                        tipodoc: tipoDoc
                                    },order: {
                                        id: "DESC"
                                    },

                                })
                            } else {
                                return Emitidos.find({
                                    where: {
                                        fechaemision: Between(fechaDesde, fechaHasta),
                                        rutreceptor: rutReceptor,
                                    },order: {
                                        id: "DESC"
                                    },
                                })
                            }
                        }
                    } else {
                        if (args.estado) {
                            if (args.tipoDoc) {
                                return Emitidos.find({
                                    where: {
                                        fechaemision: Between(fechaDesde, fechaHasta),
                                        folio: Between(folioDesde, folioHasta),
                                        estado: estado,
                                        tipodoc: tipoDoc
                                    },order: {
                                        id: "DESC"
                                    },
                                })
                            } else {
                                return Emitidos.find({
                                    where: {
                                        fechaemision: Between(fechaDesde, fechaHasta),
                                        estado: estado,
                                    },order: {
                                        id: "DESC"
                                    },

                                })
                            }
                        } else {
                            if (args.tipoDoc) {
                                return Emitidos.find({
                                    where: {
                                        fechaemision: Between(fechaDesde, fechaHasta),
                                        folio: Between(folioDesde, folioHasta),
                                        tipodoc: tipoDoc
                                    },order: {
                                        id: "DESC"
                                    },

                                })
                            } else {

                                return Emitidos.find({
                                    where: {
                                        fechaemision: Between(fechaDesde, fechaHasta),
                                    },order: {
                                        id: "DESC"
                                    },

                                })
                            }
                        }
                    }
                }
            }
        } else {

            return Emitidos.find({
                where: {
                    fechaemision:
                        Between(fechaDesde, fechaDesde),
                },
            })

        }


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

export const GET_EMITIDO_BYID = {
    type: new GraphQLList(EmitidosType),
    args: {
        id: {type: GraphQLString},
    },
    resolve(parent: any, args: any) {
        const {id} = args;

        return Emitidos.find({
            id: id
        });


    },
};


export const GET_EMITIDO_BY_ESTADO = {
    type: new GraphQLList(EmitidosType),
    args: {
        estado: {type: GraphQLString},
    },
    resolve(parent: any, args: any) {
        const {estado} = args;

        return Emitidos.find({
            where: {
                estado: estado
            },
        })
    }





};

export const GET_EMITIDO_BYTRACKID = {
    type: new GraphQLList(EmitidosType),
    args: {
        trackid: {type: GraphQLString},
    },
    resolve(parent: any, args: any) {
        const {trackid} = args;

        return Emitidos.find({
            trackid: trackid
        });


    },
};

